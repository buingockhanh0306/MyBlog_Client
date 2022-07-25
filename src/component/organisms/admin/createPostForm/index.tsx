import React from 'react';
import {
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Text
} from "@chakra-ui/react";
import InputText from "@src/component/atoms/admin/Input/inputText";
import 'react-quill/dist/quill.snow.css';
import ButtonOutline from "@src/component/atoms/admin/Button/ButtonOutline";
import ButtonSolid from "@src/component/atoms/admin/Button/ButtonSolid";
import {useFormPost} from "@src/hook/useFormPost";
import {convertToSlug} from "@src/utils/convertToSlug"; // ES6
// @ts-ignore
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import {ImUpload2} from "react-icons/im";
import {FaTimesCircle} from "react-icons/fa";
import {ReactQuill, formats, modules} from "@src/config/reactQuill";
import {useRouter} from "next/router";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {useTranslation} from "react-i18next";
import TextareaChakra from "@src/component/atoms/admin/TextareaChakra";


export interface IPost{
    title: string,
    slug: string,
    description: string,
    content: string,
    thumbnail: string,
    updatedAt?: string,
    categoryId: string,
    categoryName?: string
}
export interface ICategory{
    _id: string,
    name: string,
    slug?: string,
    updatedAt?: string
}[]
export interface IAddPostProps{
    onSubmit: (formValue: IPost)=>void,
    categories: ICategory[]
}

const CreatePostForm: React.FC<IAddPostProps> = ({onSubmit, categories}) => {
    const { t } = useTranslation('postsLocale')
    const router = useRouter()
    const { formValue, setFormValue, errors, setErrors, validation } = useFormPost({
        title: '',
        thumbnail: '',
        categoryId: '',
        slug: '',
        description: '',
        content: ''
    });

    const handleChangeTitle =(value: string)=>{
        setFormValue({
            ...formValue,
            title: value,
            slug: convertToSlug(value)
        })
        setErrors(undefined)
    }

    const handleChangeSlug =(value: string)=>{
        setFormValue({
            ...formValue,
            slug: convertToSlug(value)
        })
        setErrors(undefined)
    }

    const handleChangeDescription =(value: string)=>{
        setFormValue({
            ...formValue,
            description: value
        })
        setErrors(undefined)
    }

    const handleChangeContent =(value: any)=>{
        setFormValue({
            ...formValue,
            content: value
        })
        setErrors(undefined)
    }

    const handleChangeCategory =(value: any)=>{
        console.log(value)
        setFormValue({
            ...formValue,
            categoryId: value
        })

    }

    const handleAddPost = () =>{
        console.log(formValue)
        if(validation()){
            onSubmit(formValue)
        }
    }

    function getImageFileObject(imageFile: any) {
        setFormValue({
            ...formValue,
            thumbnail: imageFile?.file
        })
    }
    return (
        <Box>
            <InputText
                text={t('title')}
                value={formValue.title}
                placeholder={t('title')+'...'}
                error={errors?.title?.message || ""}
                onChange={(e)=>handleChangeTitle(e.currentTarget.value)}
            />

            <InputText
                text={t('slug')}
                value={formValue.slug}
                placeholder={t('slug')+'...'}
                error={errors?.slug?.message || ""}
                onChange={(e)=>handleChangeSlug(e.currentTarget.value)}
            />
            <Menu>
                <MenuButton
                    marginTop={'20px'}
                    bgColor={'#E2E8F0'}
                    color={'textColor'}
                    size={'md'}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    _hover={{bgColor: 'hoverColor', color: 'white'}}
                    _active={{bgColor: 'hoverColor', color: 'white'}}
                >
                    {t('selectCategory')}
                </MenuButton>

                <MenuList
                    maxHeight={'200px'}
                    overflow={'auto'}
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'hoverColor',
                            borderRadius: '24px',
                        },
                    }}
                >
                    <MenuOptionGroup type='radio' onChange={(value)=>handleChangeCategory(value)}>
                        {categories.map((category, index)=>(
                            <MenuItemOption key={index} value={category._id}>{category.name}</MenuItemOption>
                        ))}
                    </MenuOptionGroup>
                </MenuList>
            </Menu>


            <Box mb={'30px'}>
                <TextareaChakra
                    text={t('description')}
                    value={formValue?.description}
                    onChange={(e)=>handleChangeDescription(e.currentTarget.value)}
                    placeholder={t('description')+'...'}
                    error={errors?.description?.message || ""}
                />
            </Box>
            <Flex flexDirection={'column'} mt={'20px'}>
                <Text color={'primaryColor'} fontSize={'lg'} fontWeight={'bold'}>{t('thumbnailImage')}</Text>
                <Flex justifyContent={'center'} w={'100%'} h={'auto'}>
                    <ImageUploader
                        style={{
                            width: '50vw',
                            height: '200px',
                            fontSize: '24px',
                            color: '#DD6B20',
                            margin: '0 auto',
                            background: '#E2E8F0',
                            border: '2px dotted #DD6B20',
                            borderRadius: '20px'
                        }}
                        onFileAdded={(img: any) => getImageFileObject(img)}
                        // onFileRemoved={(img) => runAfterImageDelete(img)}
                        uploadIcon={
                            <Flex
                                w={'50vw'}
                                h={'200px'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                // bgColor={'red'}
                            >
                                <ImUpload2 fontSize={'48px'}/>
                            </Flex>
                        }
                        deleteIcon={<FaTimesCircle/>}
                    />
                </Flex>

            </Flex>

            <Flex flexDirection={'column'} gap={4} w={'100%'} mt={'20px'}>
                <Text color={'primaryColor'} fontSize={'lg'} fontWeight={'bold'}>{t('content')}</Text>
                <ReactQuill
                    formats={formats}
                    modules={modules}
                    theme="snow"
                    value={formValue.content}
                    onChange={(e)=>handleChangeContent(e)}
                />
                <Text fontSize={'sm'} color={'red'}>{errors?.content?.message || ''}</Text>
            </Flex>
            <Flex
                justifyContent={'flex-end'}
                gap={4}
                mt={'20px'}
                flexDirection={{md: 'row', base: 'column-reverse'}}
                mb={{md: 'auto', base: '20px'}}
            >
                <ButtonOutline text={t('cancel')} onClick={()=>router.push('/admin/posts')}/>
                <ButtonSolid text={t('add')} onClick={()=>handleAddPost()}/>
            </Flex>
        </Box>
    );
};

export default CreatePostForm;