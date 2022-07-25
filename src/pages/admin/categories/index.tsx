import React, {useEffect, useState} from 'react';
import {GetStaticProps} from "next";
import {LayoutType} from "@src/types/LayoutType";
import CategoriesList from "@src/component/organisms/admin/categoriesList";
import {categoriesService} from "@src/services";
import {
    Box,
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, useDisclosure,
} from "@chakra-ui/react";
import {BsPlusLg} from "react-icons/bs";
import InputText from "@src/component/atoms/admin/Input/inputText";
import {useFormPost} from "@src/component/organisms/admin/createPostForm/useFormPost";
import {convertToSlug} from "@src/utils/convertToSlug";
import {useRouter} from "next/router";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import ButtonOutline from "@src/component/atoms/admin/Button/ButtonOutline";
import ButtonSolid from "@src/component/atoms/admin/Button/ButtonSolid";
import Pagination from "@src/component/molecules/admin/pagination";
import { useTranslation } from "react-i18next";
import CategorySkeleton from "@src/component/organisms/admin/skeleton/categorySkeleton";
import HeadAdmin from "@src/component/molecules/admin/headAdmin";

const Categories = () => {
    const { t } = useTranslation('categoriesLocale')
    const [loading, setLoading] = useState<boolean>(true)
    const [categories, setCategories] = useState([])
    const [total, setTotal] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { formValue, setFormValue, errors, setErrors, validation } = useFormPost({ name: '', slug: '' });
    const router = useRouter()
    const page_size = 10

    const getData = async () => {
        const categoriesData = await categoriesService.get(currentPage)
        setCategories(categoriesData.data.categories)
        setTotal(categoriesData.data.total)
        setLoading(false)
    }

    useEffect(()=>{
        getData()
    },[currentPage])

    const handleDeleteCategory = async (slug: string)=>{
        await categoriesService.delete(slug)
        getData()
    }

    const handleEditCategory = async (slug: string)=>{
        router.push(`/admin/categories/${slug}`)
    }

    const handleChangeName = (value: string) =>{
        setFormValue({
            name: value,
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

    const handleAddCategory = async() =>{
        if(validation()){
            await categoriesService.post(formValue)
            onClose()
            getData()
        }

    }

    return (
        <>
            <HeadAdmin title={'Quản lý danh mục'}/>
            {!loading ?
            <Box padding={'20px 20px'} color={'primaryColor'}>
                <HeadingChakra text={t('categoriesManager')}/>
                <Button
                    leftIcon={<BsPlusLg/>}
                    colorScheme='secondColor'
                    variant='outline'
                    _hover={{bgColor: 'hoverColor', color: 'white'}}
                    onClick={onOpen}
                >
                    {t('addCategory')}
                </Button>
                <CategoriesList
                    categories={categories}
                    onDelete={handleDeleteCategory}
                    onEdit={handleEditCategory}
                />
                {total > page_size && <Pagination
                    pageCount={Math.ceil(total / page_size)}
                    activePagination={currentPage}
                    handlePageClick={(e) => setCurrentPage(Number((e.target as any).value))}
                />}

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader color={'primaryColor'}>{t('addCategory')}</DrawerHeader>

                        <DrawerBody>
                            <InputText
                                text={t('categoryName')}
                                value={formValue.name}
                                placeholder={t('enterCategoryName')}
                                error={errors?.name?.message || " "}
                                onChange={(e) => handleChangeName(e.currentTarget.value)}
                            />
                            <InputText
                                text={t('slug')}
                                value={formValue.slug}
                                placeholder={t('enterSlug')}
                                error={errors?.slug?.message || " "}
                                onChange={(e) => handleChangeSlug(e.currentTarget.value)}
                            />
                        </DrawerBody>

                        <DrawerFooter gap={4}>
                            <ButtonOutline text={t('cancel')} onClick={onClose}/>
                            <ButtonSolid text={t('add')} onClick={handleAddCategory}/>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box> : <CategorySkeleton numberRecord={10}/>}
        </>
        
    );
};

export default Categories;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            layout: LayoutType.Admin,
            linksConnect: false,
        },
    };
};