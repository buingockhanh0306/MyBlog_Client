import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Progress, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { categoriesService, contactService } from '@src/services';
import { ICategory } from '@src/component/organisms/admin/createPostForm';
import HeaderCommon from '@src/component/molecules/common/header';
import FooterCommon from '@src/component/molecules/common/footer';

interface ILayoutProps {
  children: ReactNode;
}
const LayoutCommon: React.FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [positionPage, setPositionPage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const getData = async () => {
    const categoriesData = await categoriesService.get(0);
    setCategories(categoriesData.data);
    setLoading(false);
  };

  const getContact = async () => {
    const contactData = await contactService.get();
    setContact(contactData.data);
  };

  useEffect(() => {
    getData();
    getContact();
  }, []);

  const onScroll = () => {
    const winScroll = window.document.documentElement.scrollTop;
    const height =
      window.document.documentElement.scrollHeight -
      window.document.documentElement.clientHeight;
    setPositionPage((winScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const handleClickSideBar = (slug: string) => {
    router.push(`/home/${slug}`);
    onClose();
  };

  const renderSidebarMobile = () => {
    return (
      <Box as={'ul'}>
        {categories.map((item) => (
          <Text
            key={item.slug}
            as={'h3'}
            py={'10px'}
            fontSize={'lg'}
            fontWeight={'semibold'}
            onClick={() => handleClickSideBar(String(item.slug))}
          >
            {item.name}
          </Text>
        ))}
      </Box>
    );
  };

  return (
    <>
      <HeaderCommon
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        categories={categories}
        childrenDrawer={renderSidebarMobile()}
      />

      <Progress
        colorScheme="blue"
        size="sm"
        value={positionPage}
        position={'fixed'}
        top={'68px'}
        left={0}
        right={0}
        zIndex={10}
        isIndeterminate={loading}
      />
      <main>{children}</main>
      <FooterCommon data={contact} />
    </>
  );
};

export default LayoutCommon;
