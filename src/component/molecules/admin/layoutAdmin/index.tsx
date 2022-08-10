import React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { FaBars, FaElementor, FaRegEdit, FaUsersCog } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useRouter } from 'next/router';
import { storageService } from '@src/services';
import { AiFillSetting } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { ImHome } from 'react-icons/im';

interface ILayoutAdminProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}

const LayoutAdmin: React.FC<ILayoutAdminProps> = ({ children }) => {
  const { t } = useTranslation('layoutLocale');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headerHeight = '60px';
  const router = useRouter();

  function findPath (path: string) {
    return router.pathname.indexOf(path) === 0;
  }

  const handleLogout = () => {
    router.push('/admin/login');
    storageService.remove('isAuth');
  };

  const sidebarItem = [
    {
      text: t('categoriesManager'),
      icon: <FaElementor />,
      path: '/admin/categories'
    },
    { text: t('postsManager'), icon: <FaRegEdit />, path: '/admin/posts' },
    { text: t('accountManager'), icon: <FaUsersCog />, path: '/admin/auth' },
    { text: t('setting'), icon: <AiFillSetting />, path: '/admin/setting' },
    { text: t('goToHome'), icon: <ImHome />, path: '/home' }
  ];

  const handleOnClick = (path: string) => {
    router.push(path);
    onClose();
  };

  const renderSidebar = (
    color: string,
    colorHover: string,
    bgColorHover: string
  ) => {
    return sidebarItem.map((item) => (
      <Box key={item.path}>
        <Button
          leftIcon={item.icon}
          bgColor={findPath(item.path) ? 'white' : 'transparent'}
          variant="solid"
          color={findPath(item.path) ? 'black' : color}
          my={'6px'}
          w={'90%'}
          _active={{
            bgColor: 'red.100'
          }}
          _hover={{
            color: colorHover,
            bgColor: bgColorHover
          }}
          onClick={() => handleOnClick(item.path)}
          suppressHydrationWarning
        >
          {item.text}
        </Button>
        <Divider />
      </Box>
    ));
  };
  return (
    <Box>
      <Flex
        px={'20px'}
        w={'100%'}
        h={headerHeight}
        bgColor={'primaryColor'}
        justifyContent={'space-between'}
        alignItems={'center'}
        color={'white'}
        position={'fixed'}
        top={'0'}
        left={'0'}
        right={'0'}
        zIndex={100}
      >
        <Flex gap={4} alignItems={'center'}>
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
          <Button
            bgColor={'transparent'}
            _hover={{ bgColor: 'transparent' }}
            _active={{ bgColor: 'transparent' }}
            fontSize={'2xl'}
            onClick={() => router.push('/admin')}
          >
            LOGO
          </Button>
        </Flex>
        <IconButton
          aria-label="Search database"
          icon={<MdLogout />}
          bgColor={'gray.200'}
          size={'md'}
          color={'black'}
          _hover={{
            bgColor: 'gray.400'
          }}
          onClick={() => handleLogout()}
        />
      </Flex>
      <Flex>
        <Box
          display={{ md: 'block', sm: 'none', base: 'none' }}
          w={'20%'}
          h={'100vh'}
          bgColor={'primaryColor'}
          textAlign={'center'}
          position={'fixed'}
          top={'0'}
          left={'0'}
          bottom={'0'}
          mt={headerHeight}
        >
          {renderSidebar('white', 'black', 'white')}
        </Box>
        <Box
          ml={{ md: '20vw', base: '0px' }}
          mt={headerHeight}
          bgColor={'secondaryColor'}
          w={'100%'}
          padding={{ md: '20px 20px', base: '0px' }}
          h={'auto'}
          minHeight={'100vh'}
        >
          {children}
        </Box>
      </Flex>

      <Drawer
        placement={'left'}
        onClose={onClose}
        isOpen={isOpen}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody textAlign={'center'}>
            {renderSidebar('black', 'white', 'primaryColor')}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default LayoutAdmin;
