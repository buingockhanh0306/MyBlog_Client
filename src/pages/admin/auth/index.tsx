import React, {useEffect, useState} from 'react';
import {GetStaticProps} from "next";
import {LayoutType} from "@src/types/LayoutType";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import {
    Box,
    Button, Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay, useDisclosure, useToast
} from "@chakra-ui/react";
import {BsPlusLg} from "react-icons/bs";
import {useRouter} from "next/router";
import AuthList from "@src/component/organisms/admin/authList";
import {adminService} from "@src/services";
import {IAuthProps} from "@src/types/authType";
import InputText from "@src/component/atoms/admin/Input/inputText";
import ButtonOutline from "@src/component/atoms/admin/Button/ButtonOutline";
import ButtonSolid from "@src/component/atoms/admin/Button/ButtonSolid";
import {useFormLogin} from "@src/hook/useFormLogin";
import InputPassword from "@src/component/atoms/admin/Input/inputPassword";
import {useTranslation} from "react-i18next";
import AuthIndexSkeleton from "@src/component/organisms/admin/skeleton/authSkeleton";
import HeadAdmin from "@src/component/molecules/admin/headAdmin";

const AuthPage = () => {
    const { t } = useTranslation('authLocale')
    const toast = useToast()
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [admins, setAdmins] = useState<IAuthProps[]>([{username: '', updatedAt: ''}])
    const { formValue, setFormValue, errors, validation } = useFormLogin({username: '', password: ''})

    const getAuths = async ()=>{
        const authData = await adminService.get()
        setAdmins(authData.data)
        setLoading(false)
    }
    useEffect(()=>{
        getAuths()
    },[])

    const handleDelete = async (username: string) =>{
        await adminService.delete(username)
        getAuths()
    }

    const handleChangeUserName = (value: string)=>{
        setFormValue({
            ...formValue,
            username: value
        })
    }
    const handleChangePassword = (value: string) =>{
        setFormValue({
            ...formValue,
            password: value
        })
    }
    const handleAddAdmin = async () =>{
        if(validation()){
           await adminService.creat(formValue)
            getAuths()
        }
    }
    return (
        <>
            <HeadAdmin title={'Quản lý tài khoản'}/>
            {!loading ? <Box padding={'20px 20px'} color={'primaryColor'}>
                <HeadingChakra text={t('accountManager')}/>
                <Button
                    leftIcon={<BsPlusLg/>}
                    colorScheme='secondColor'
                    variant='outline'
                    _hover={{bgColor: 'hoverColor', color: 'white'}}
                    onClick={onOpen}
                >
                    {t('addAdmin')}
                </Button>
                <AuthList
                    auths={admins}
                    onDelete={handleDelete}
                />

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader color={'primaryColor'}>Thêm Admin</DrawerHeader>

                        <DrawerBody>
                            <InputText
                                text={t('username')}
                                value={formValue.username}
                                placeholder={t('enterUsername')}
                                error={errors?.name?.message || " "}
                                onChange={(e) => handleChangeUserName(e.currentTarget.value)}
                            />
                            <InputPassword
                                text={t('password')}
                                value={formValue.password}
                                placeholder={t('enterPassword')}
                                error={errors?.slug?.message || " "}
                                onChange={(e) => handleChangePassword(e.currentTarget.value)}
                            />
                        </DrawerBody>

                        <DrawerFooter gap={4}>
                            <ButtonOutline text={t('cancel')} onClick={onClose}/>
                            <ButtonSolid text={t('add')} onClick={handleAddAdmin}/>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box> : <AuthIndexSkeleton numberRecord={4}/>}
        </>

    );
};

export default AuthPage;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            layout: LayoutType.Admin,
            linksConnect: false,
        },
    };
};