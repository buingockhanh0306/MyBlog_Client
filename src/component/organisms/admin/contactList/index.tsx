import React from 'react';
import { contactProps } from '@src/types/contact';
import { Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButtonChakra from '@src/component/atoms/admin/Button/IconButtonChakra';

type IContactListProps = {
  data: contactProps[];
  onDelete: (slug: string) => void;
};
const ContactList: React.FC<IContactListProps> = ({
  data,
  onDelete
}): JSX.Element => {
  const handleDelete = (slug: string) => {
    onDelete(slug);
  };
  return (
    <Stack ml={'30px'} mt={'20px'}>
      {data.map((item) => (
        <Flex
          justifyContent={'space-between'}
          alignItems={{ md: 'center', base: 'flex-start' }}
          key={item.slug}
          flexDirection={{ md: 'row', base: 'column' }}
        >
          <Flex alignItems={'center'}>
            <Image
              display={'inline'}
              boxSize="2rem"
              borderRadius="full"
              src={item.icon}
              alt={item.name}
              mr="12px"
            />
            <Text>{item.name}</Text>
          </Flex>

          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            w={{ md: '60%', base: '100%' }}
          >
            <Link color={'hoverColor'} href={item.url} isExternal={true}>
              {item.url}
            </Link>
            <IconButtonChakra
              icon={<AiOutlineDelete />}
              onClick={() => handleDelete(item.slug)}
            />
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
};

export default ContactList;
