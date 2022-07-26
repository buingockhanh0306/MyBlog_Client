import React, {useState} from 'react';
import {LayoutType} from "@src/types/LayoutType";
import {useTranslation} from "react-i18next";
import {Box, Button, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup} from "@chakra-ui/react";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import {ChevronDownIcon} from "@chakra-ui/icons";
import HeadAdmin from "@src/component/molecules/admin/headAdmin";

const Setting = () =>{
    const { t, i18n } = useTranslation('settingLocale')
    const [langSelected, setLangSelected] = useState<string>(i18n.language)
    const handleChangeLanguage = (value: any)=> {
        setLangSelected(value)
        i18n.changeLanguage(value)
    }
    return (
        <>
            <HeadAdmin title={'Cài đặt'}/>
            <Box padding={{md: 'auto', base: '10px'}}>
                <HeadingChakra text={t('setting')}/>
                <Flex ml={'30px'} gap={4} alignItems={'center'}>
                    <HeadingChakra text={t('language')} fontSize={'lg'} />
                    <Menu>
                        <MenuButton
                            mb={'20px'}
                            bgColor={'#E2E8F0'}
                            color={'textColor'}
                            size={'md'}
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{bgColor: 'hoverColor', color: 'white'}}
                            _active={{bgColor: 'hoverColor', color: 'white'}}
                        >
                            {langSelected === 'vi' ? t('vietnamese') : t('english')}
                        </MenuButton>

                        <MenuList>
                            <MenuOptionGroup defaultValue={i18n.language} type='radio' onChange={(value)=>handleChangeLanguage(value)}>
                                <MenuItemOption value={'vi'}>{t('vietnamese')}</MenuItemOption>
                                <MenuItemOption value={'en'}>{t('english')}</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>

            {/*<Box padding={{md: 'auto', base: '10px'}}>*/}
            {/*    <HeadingChakra text={t('settingSEO')}/>*/}
            {/*    <Box ml={'30px'}>*/}
            {/*        <InputText text={t('title')} value={''} placeholder={t('titlePlaceholder')}/>*/}
            {/*        <InputText text={t('description')} value={''} placeholder={t('descPlaceholder')}/>*/}
            {/*    </Box>*/}
            {/*    <Flex justifyContent={'flex-end'} gap={4} mt={'40px'}>*/}
            {/*        <ButtonOutline text={t('reset')}/>*/}
            {/*        <ButtonSolid text={t('done')}/>*/}
            {/*    </Flex>*/}
            {/*</Box>*/}
        </>
       );
};

export default Setting;
export const getStaticProps = async () => {
    return {
        props: {
            layout: LayoutType.Admin,
            linksConnect: false,
        },
    };
};