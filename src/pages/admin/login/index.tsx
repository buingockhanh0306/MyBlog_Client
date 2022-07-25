import React, {useState} from 'react';
import FormLogin from "@src/component/organisms/admin/formLogin";
import {IFormValue} from "@src/hook/useFormLogin";
import {useRouter} from "next/router";
import {authService, storageService} from "@src/services";
import HeadAdmin from "@src/component/molecules/admin/headAdmin";

const Login = () => {

    const [msgError, setMsgError] = useState<string>("")
    const router = useRouter()
    const handleLogin = async (formValue: IFormValue)=>{
        const dataLogin = await authService.login({
            username: formValue.username,
            password: formValue.password
        })
        const user = await dataLogin.data.user

        if(user){
            router.push('/admin')
            storageService.set('isAuth', user)

        }
        else{
            setMsgError("Sai tên đăng nhập hoặc mật khẩu!")
        }
    }
    return (
        <>
            <HeadAdmin title={'Đăng nhập'}/>
            <FormLogin msgError={msgError} onSubmit={handleLogin}/>
        </>

    );
};

export default Login;