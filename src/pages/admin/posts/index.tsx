import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { LayoutType } from '@src/types/LayoutType';
import HeadingChakra from '@src/component/atoms/admin/Heading';
import { Box, Button, Flex } from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import PostsList from '@src/component/organisms/admin/postsList';
import { postsService } from '@src/services';
import { useRouter } from 'next/router';
import Pagination from '@src/component/molecules/admin/pagination';
import { useTranslation } from 'react-i18next';
import PostIndexSkeleton from '@src/component/organisms/admin/skeleton/postSkeleton';
import InputSearch from '@src/component/molecules/admin/inputSearch';
import HeadAdmin from '@src/component/molecules/admin/headAdmin';

const Posts: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation('postsLocale');
  const [posts, setPosts] = useState([]);
  const [postsSearch, setPostsSearch] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const page_size = 6;
  const router = useRouter();

  const getData = async () => {
    const postsData = await postsService.get(currentPage);
    setPosts(postsData.data.posts);
    setTotal(postsData.data.total);
    setLoading(false);
  };

  const getDataSearch = async () => {
    const postsDataSearch = await postsService.get(0);
    setPostsSearch(postsDataSearch.data.posts);
  };
  useEffect(() => {
    getDataSearch();
  }, []);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const handleChangeSearch = (e: React.ChangeEvent) => {
    setSearchValue((e.currentTarget as HTMLInputElement).value);
  };
  return (
    <>
      <HeadAdmin title={'Quản lý bài viết'} />
      {!loading
        ? (
        <Box padding={'20px 20px'} color={'primaryColor'}>
          <HeadingChakra text={t('postsManager')} />
          <Flex
            flexDirection={{ md: 'row', base: 'column' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={4}
          >
            <Button
              leftIcon={<BsPlusLg />}
              colorScheme="secondColor"
              variant="outline"
              _hover={{ bgColor: 'hoverColor', color: 'white' }}
              onClick={() => router.push('/admin/posts/create')}
            >
              {t('addPost')}
            </Button>

            <InputSearch
              isHidden={!searchValue}
              searchValue={searchValue}
              placeholder={t('enterSearch')}
              onChange={handleChangeSearch}
              value={searchValue}
              data={postsSearch}
              clickButton={() => setSearchValue('')}
            />
          </Flex>

          <PostsList posts={posts} />
          {total > page_size && (
            <Pagination
              pageCount={Math.ceil(total / page_size)}
              handlePageClick={(e) =>
                setCurrentPage(Number((e.currentTarget as HTMLButtonElement).value))
              }
              activePagination={currentPage}
            />
          )}
        </Box>
          )
        : (
        <PostIndexSkeleton numberRecord={6} />
          )}
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      layout: LayoutType.Admin,
      linksConnect: false
    }
  };
};
