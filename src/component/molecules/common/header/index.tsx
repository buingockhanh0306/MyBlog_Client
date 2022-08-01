import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Text
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { ICategory } from '@src/component/organisms/admin/createPostForm';

interface IHeaderProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  categories: ICategory[];
  childrenDrawer: JSX.Element;
}
const HeaderCommon: React.FC<IHeaderProps> = ({
  onOpen,
  categories,
  isOpen,
  onClose,
  childrenDrawer
}): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Box
        bgColor={'primaryColor'}
        color={'white'}
        w={'100%'}
        h={'68px'}
        boxShadow={'lg'}
        position={'fixed'}
        top={0}
        left={0}
        right={0}
        zIndex={10}
      >
        <Flex
          // justifyContent={'space-around'}
          alignItems={'center'}
          h={'100%'}
          px={'24px'}
        >
          <IconButton
            aria-label={''}
            icon={<FaBars />}
            bgColor={'transparent'}
            size={'lg'}
            color={'white'}
            _active={{
              bgColor: 'transparent'
            }}
            _hover={{
              bgColor: 'transparent'
            }}
            display={{ md: 'none', sm: 'block' }}
            onClick={onOpen}
          />

          <Heading
            onClick={() => router.push('/')}
            _hover={{ cursor: 'pointer' }}
            ml={'10px'}
          >
            LOGO
          </Heading>
          <Box as={'ul'} ml={'60px'} display={{ md: 'block', base: 'none' }}>
            {categories.map((item) => (
              <Text
                color={
                  item.slug === router.query.categoryName ? 'white' : '#ccc'
                }
                key={item.slug}
                display={'inline'}
                mx={'20px'}
                as={'li'}
                fontWeight={'semibold'}
                _hover={{
                  cursor: 'pointer'
                }}
                onClick={() => router.push(`/home/${item.slug}`)}
              >
                {item.name}
              </Text>
            ))}
          </Box>

          <Drawer
            placement={'left'}
            onClose={onClose}
            isOpen={isOpen}
            size={'full'}
          >
            <DrawerOverlay />
            <DrawerContent color={'primaryColor'}>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody textAlign={'center'} px={0}>
                {childrenDrawer}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>

      <Image
        alt={'banner'}
        mt={'68px'}
        mb={'40px'}
        w={'100%'}
        height={'200px'}
        src={'/images/banner.jpg'}
        objectFit={'cover'}
      />
    </>
  );
};

export default HeaderCommon;
