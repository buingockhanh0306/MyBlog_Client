import React, { useEffect, useState } from 'react';
import { LayoutType } from '@src/types/LayoutType';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useToast
} from '@chakra-ui/react';
import HeadingChakra from '@src/component/atoms/admin/Heading';
import { ChevronDownIcon } from '@chakra-ui/icons';
import HeadAdmin from '@src/component/molecules/admin/headAdmin';
import Contact from '@src/component/organisms/admin/contact';
import { contactProps } from '@src/types/contact';
import { contactService } from '@src/services';
import ContactList from '@src/component/organisms/admin/contactList';
import { arrContact } from '@src/constant/listContact';
import SettingSkeleton from '@src/component/organisms/admin/skeleton/settingSkeleton';

const Setting = () => {
  const { t, i18n } = useTranslation('settingLocale');
  const [langSelected, setLangSelected] = useState<string>(i18n.language);
  const [loading, setLoading] = useState<boolean>(true);
  const [contacts, setContacts] = useState<contactProps[]>([]);
  const toast = useToast();
  const handleChangeLanguage = (value: string) => {
    setLangSelected(value);
    i18n.changeLanguage(value);
  };
  const getContacts = async () => {
    const getData = await contactService.get();
    setContacts(getData.data);
    setLoading(false);
  };
  useEffect(() => {
    getContacts();
  }, []);

  const handleSubmitContact = async (formContact: contactProps) => {
    let isExist = false;
    // eslint-disable-next-line array-callback-return
    contacts.map((item) => {
      if (item.slug === formContact.slug) isExist = true;
    });
    if (!isExist && formContact.url && formContact.icon) {
      await contactService.creat(formContact);
      getContacts();
      toast({
        title: t('addSuccess'),
        description: t('addContactSuccess'),
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    } else {
      toast({
        title: t('cannotAdd'),
        description: t('error'),
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  const handleDeleteContact = async (slug: string) => {
    await contactService.delete(slug);
    getContacts();
    toast({
      title: t('deleteSuccess'),
      description: t('deletedContact'),
      status: 'error',
      duration: 3000,
      isClosable: true
    });
  };
  return !loading
    ? (
    <>
      <HeadAdmin title={'Cài đặt'} />
      <Box padding={{ md: 'auto', base: '10px' }}>
        <HeadingChakra text={t('generalSettings')} />
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
              _hover={{ bgColor: 'hoverColor', color: 'white' }}
              _active={{ bgColor: 'hoverColor', color: 'white' }}
            >
              {langSelected === 'vi' ? t('vietnamese') : t('english')}
            </MenuButton>

            <MenuList>
              <MenuOptionGroup
                defaultValue={i18n.language}
                type="radio"
                onChange={(value) => handleChangeLanguage(String(value))}
              >
                <MenuItemOption value={'vi'}>{t('vietnamese')}</MenuItemOption>
                <MenuItemOption value={'en'}>{t('english')}</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Box padding={{ md: 'auto', base: '10px' }}>
        <HeadingChakra text={t('contactSettings')} />
        <Contact data={arrContact} onSubmit={handleSubmitContact} />
        <ContactList data={contacts} onDelete={handleDeleteContact} />
      </Box>
    </>
      )
    : (
    <SettingSkeleton />
      );
};

export default Setting;
export const getStaticProps = async () => {
  return {
    props: {
      layout: LayoutType.Admin,
      linksConnect: false
    }
  };
};
