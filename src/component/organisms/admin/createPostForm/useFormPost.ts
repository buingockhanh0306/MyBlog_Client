import {object, string} from "yup";
import {useState} from "react";
import * as yup from 'yup'

export interface IFormValue{
    name: string,
    slug: string
}

interface IErrors {
    [key: string]: {
        message: string;
    };
}

const schema = object({
    name: string().required('Vui lòng nhập tên danh mục'),
    slug: string().required('Vui lòng nhập đường dẫn')
})
export function useFormPost(defaultValues: IFormValue){
    const [formValue, setFormValue] = useState(defaultValues);
    const [errors, setErrors] = useState<IErrors>();
    function validation(): boolean {
        setErrors(undefined);
        try {
            schema.validateSync(formValue, { abortEarly: false });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                if (error.inner) {
                    const newErrors: IErrors = {};
                    error.inner.forEach((err) => {
                        if (err.path && err.message) {
                            newErrors[err.path] = { message: err.message };
                        }
                    });
                    setErrors(newErrors);
                    return false;
                }
            }
        }

        return true;
    }

    return {
        formValue,
        setFormValue,
        validation,
        errors,
        setErrors,
    };
}