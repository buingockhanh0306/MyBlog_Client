import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { LayoutType } from '@src/types/LayoutType';
import { Box, Flex } from '@chakra-ui/react';
import InputText from '@src/component/atoms/admin/Input/inputText';
import { useRouter } from 'next/router';
import { categoriesService } from '@src/services';
import { useFormPost } from '@src/component/organisms/admin/createPostForm/useFormPost';
import Heading from '@src/component/atoms/admin/Heading';
import ButtonOutline from '@src/component/atoms/admin/Button/ButtonOutline';
import ButtonSolid from '@src/component/atoms/admin/Button/ButtonSolid';
import AdminBreadcrumb from '@src/component/atoms/admin/AdminBreadcrumb';
import { useTranslation } from 'react-i18next';
import EditCategorySkeleton from '@src/component/organisms/admin/skeleton/categorySkeleton/editCategorySkeleton';
import HeadAdmin from '@src/component/molecules/admin/headAdmin';

const SlugDetail = () => {
  const { t } = useTranslation('categoriesLocale');
  const [loading, setLoading] = useState<boolean>(true);
  const { formValue, setFormValue, errors, setErrors, validation } =
    useFormPost({ name: '', slug: '' });
  const breadCrumb = [
    { text: t('categoriesManager') + ' / ', href: '/admin/categories' },
    { text: t('editCategory'), isCurrent: true }
  ];
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    const getData = async () => {
      const categoryDetail = await categoriesService.getDetail(String(slug));
      setFormValue(categoryDetail.data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleChangeName = (value: string) => {
    setFormValue({
      ...formValue,
      name: value
    });
    setErrors(undefined);
  };

  const handleUpdateCategory = async () => {
    if (validation()) {
      await categoriesService.update(formValue.slug, formValue);
      router.push('/admin/categories/');
    }
  };
  return (
    <>
      <HeadAdmin title={'Chỉnh sửa danh mục'} />
      {!loading
        ? (
        <Box padding={{ md: '0px', base: '0 10px' }}>
          <AdminBreadcrumb link={breadCrumb} />
          <Heading text={t('editCategory')} />
          <InputText
            text={t('categoryName')}
            value={formValue?.name}
            placeholder={t('enterCategoryName')}
            error={errors?.name?.message || ' '}
            onChange={(e) => handleChangeName(e.currentTarget.value)}
          />

          <InputText
            isDisabled={true}
            text={t('slug')}
            value={formValue?.slug}
            placeholder={''}
            error={''}
          />
          <Flex
            gap={4}
            justifyContent={'flex-end'}
            mt={'20px'}
            flexDirection={{ md: 'row', base: 'column-reverse' }}
          >
            <ButtonOutline
              text={t('cancel')}
              isLoading={false}
              onClick={() => router.push('/admin/categories/')}
            />
            <ButtonSolid
              text={t('update')}
              isLoading={false}
              onClick={handleUpdateCategory}
            />
          </Flex>
        </Box>
          )
        : (
        <EditCategorySkeleton />
          )}
    </>
  );
};

export default SlugDetail;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      layout: LayoutType.Admin,
      linksConnect: false
    }
  };
};

export async function getStaticPaths () {
  return {
    paths: ['/admin/categories/:slug', { params: { slug: 'second-post' } }],
    fallback: true
  };
}
