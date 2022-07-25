import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {GetStaticProps} from "next";
import {LayoutType} from "@src/types/LayoutType";
import {categoriesService, postsService} from "@src/services";
import {Box, Flex} from "@chakra-ui/react";
import ButtonIconSolid from "@src/component/atoms/admin/Button/ButtonIconSolid";
import {FaRegEdit} from "react-icons/fa";
import ButtonIconOutline from "@src/component/atoms/admin/Button/ButtonIconOutline";
import {AiOutlineDelete} from "react-icons/ai";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import PostDetail from "@src/component/organisms/admin/postDetail";
import {IPost} from "@src/component/organisms/admin/createPostForm";
import AdminBreadcrumb from "@src/component/atoms/admin/AdminBreadcrumb";
import {useTranslation} from "react-i18next";
import DetailPostSkeleton from "@src/component/organisms/admin/skeleton/postSkeleton/detailPostSkeleton";
import HeadAdmin from "@src/component/molecules/admin/headAdmin";


const DetailPage: React.FC = (): JSX.Element => {
    const { t } = useTranslation('postsLocale')
    const [loading, setLoading] = useState<boolean>(true)
    const [postData, setPostData] = useState({
        title: '',
        slug: '',
        description: '',
        content: '',
        thumbnail: '',
        updatedAt: '',
        categoryId: '',
        categoryName: ''
    })
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [categories, setCategories] = useState([])
    const breadCrumb = [{text: t('postsManager')+' / ', href:'/admin/posts'},{text: t('postDetail'), isCurrent: true}]
    const router = useRouter()
    const slug = String(router.query.slug)
    const getData = async ()=>{
        const postDetail = await postsService.getDetail(slug)
        setPostData(postDetail.data)
        setLoading(false)
    }
    useEffect(()=>{
        const getData = async ()=>{
            const getCategories = await categoriesService.get(0)
            setCategories(getCategories.data)
        }
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[])
    const handleDeletePost = async () =>{
        await postsService.delete(slug)
        router.push('/admin/posts')
    }
    const handleUpdatePost= async (formValue: IPost)=>{
        await postsService.update(slug, formValue)
        router.push('/admin/posts')
    }
    return (
        <>
            <HeadAdmin title={'Chi tiết bài viết'}/>
            {!loading ?
            <Box px={{md: 'auto', base: '10px'}}>
                <AdminBreadcrumb link={breadCrumb}/>
                <Flex
                    justifyContent={'space-between'}
                    flexDirection={{md: 'row', base: 'column'}}
                    mb={{md: 'auto', base: '20px'}}
                >
                    <HeadingChakra text={isEdit ? t('editPost') : t('postDetail')}/>
                    {!isEdit && <Flex gap={4}>
                        <ButtonIconSolid
                            text={t('edit')}
                            size={'md'}
                            leftIcon={<FaRegEdit/>}
                            onClick={() => setIsEdit(!isEdit)}
                        />
                        <ButtonIconOutline
                            text={t('delete')}
                            size={'md'}
                            leftIcon={<AiOutlineDelete/>}
                            onClick={() => handleDeletePost()}
                        />
                    </Flex>}
                </Flex>
                <PostDetail
                    categories={categories}
                    onClickExit={() => setIsEdit(false)}
                    post={postData}
                    isEdit={isEdit}
                    onSubmit={handleUpdatePost}
                />
            </Box> : <DetailPostSkeleton/>}

        </>
    );
};

export default DetailPage;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            layout: LayoutType.Admin,
            linksConnect: false,
        },
    };
};

export async function getStaticPaths() {
    return {
        paths: ['/admin/posts/:slug', { params: { slug: 'second-post' } }],
        fallback: true
    };
};