import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import InputText from '@src/component/atoms/admin/Input/inputText';
import ButtonSolid from '@src/component/atoms/admin/Button/ButtonSolid';
import { contactProps } from '@src/types/contact';
import { convertToSlug } from '@src/utils/convertToSlug';
import { useTranslation } from 'react-i18next';

type IContactProps = {
  data: contactProps[];
  onSubmit: (data: contactProps) => void;
};
const Contact: React.FC<IContactProps> = ({ data, onSubmit }) => {
  const { t } = useTranslation('settingLocale');
  const [formContact, setFormContact] = useState<contactProps>({
    icon: '',
    name: '',
    url: '',
    slug: ''
  });

  const handleChangeContact = (value: string) => {
    setFormContact({
      ...formContact,
      name: value
    });
  };
  const handleChangeUrl = (value: string) => {
    setFormContact({
      ...formContact,
      url: value
    });
  };
  const handleAddContact = () => {
    onSubmit({
      ...formContact,
      slug: convertToSlug(formContact.name),
      icon: `/images/${convertToSlug(formContact.name)}.png`
    });
  };
  return (
    <Flex
      mt={'-20px'}
      gap={{ md: 4, base: 0 }}
      alignItems={'center'}
      justifyContent={'space-around'}
      flexDirection={{ md: 'row', base: 'column' }}
    >
      <Menu>
        <MenuButton
          ml={'30px'}
          mt={'20px'}
          w={'200px'}
          as={Button}
          size={'md'}
          bgColor={'primaryColor'}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bgColor: 'hoverColor' }}
          _active={{ bgColor: 'primaryColorColor' }}
        >
          {formContact.name || t('contact')}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            defaultValue={''}
            type="radio"
            onChange={(value) => handleChangeContact(String(value))}
          >
            {data?.map((item) => (
              <MenuItemOption value={item.name} key={item.name} minH="48px">
                <Flex alignItems={'center'}>
                  <Image
                    display={'inline'}
                    boxSize="2rem"
                    borderRadius="full"
                    src={item.icon}
                    alt={item.name}
                    mr="12px"
                  />
                  <span>{item.name}</span>
                </Flex>
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Box w={'100%'}>
        <InputText
          value={formContact.url}
          placeholder={t('urlPlaceholder')}
          onChange={(e) => handleChangeUrl(e.currentTarget.value)}
        />
      </Box>
      <Box mt={'20px'}>
        <ButtonSolid
          size={'md'}
          text={t('add')}
          onClick={() => handleAddContact()}
        />
      </Box>
    </Flex>
  );
};

export default Contact;
