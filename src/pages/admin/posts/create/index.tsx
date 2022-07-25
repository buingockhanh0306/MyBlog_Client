import React, {useEffect, useState} from 'react';
import {GetStaticProps} from "next";
import {LayoutType} from "@src/types/LayoutType";
import {Box} from "@chakra-ui/react";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import CreatePostForm, {IPost} from "@src/component/organisms/admin/createPostForm";
import {categoriesService, postsService} from "@src/services";
import {useRouter} from "next/router";
import AdminBreadcrumb from "@src/component/atoms/admin/AdminBreadcrumb";
import {useTranslation} from "react-i18next";
import AddPostSkeleton from "@src/component/organisms/admin/skeleton/postSkeleton/addPostSkeleton";
import HeadAdmin from "@src/component/molecules/admin/headAdmin";

const CreatePost = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { t } = useTranslation('postsLocale')
    const router = useRouter()
    const [categories, setCategories] = useState([])
    const breadCrumb = [{text: t('postsManager') + ' / ', href: '/admin/posts'}, {text: t('addPost'), isCurrent: true}]

    const handleAddPost = async (formValue: IPost)=>{
        await postsService.post(formValue)
        router.push('/admin/posts')
        getData()
    }

    const getData = async ()=>{
        const getCategories = await categoriesService.get(0)
        setCategories(getCategories.data)
        setLoading(false)
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <>
            <HeadAdmin title={'Tạo bài viết'}/>
            {!loading ?
            <Box px={{md: 0, base: '10px'}}>
                <AdminBreadcrumb link={breadCrumb}/>
                <HeadingChakra text={t('addPost')}/>
                <CreatePostForm onSubmit={handleAddPost} categories={categories}/>
            </Box> : <AddPostSkeleton/>}
        </>

    );
};

export default CreatePost;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            layout: LayoutType.Admin,
            linksConnect: false,
        },
    };
};