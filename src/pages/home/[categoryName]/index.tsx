import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { LayoutType } from '@src/types/LayoutType';
import { Box, Divider, Grid, GridItem } from '@chakra-ui/react';
import HeadingPage from '@src/component/molecules/common/headingPage';
import ImageCard from '@src/component/organisms/common/imageCard';
import Pagination from '@src/component/molecules/admin/pagination';
import { postsService } from '@src/services';
import { ItemPerPage } from '@src/utils/itemPerPage';
import { useRouter } from 'next/router';
import SkeletonIndex from '@src/component/organisms/common/skeleton';
import HeadCommon from '@src/component/molecules/common/headCommon';
import { upperCaseTitle } from '@src/utils/upperCaseTitle';
import { IPost } from '@src/component/organisms/admin/createPostForm';

const CategoryName = () => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemPerPage, setItemPerPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();

  const categoryName = router.query.categoryName?.slice(0, -8);
  const page_size = 6;
  const getData = async () => {
    const postsData = await postsService.get(0);

    // Lọc bài viết có danh mục = categoryName
    const filterPosts = postsData.data.posts.filter(
      (item: IPost) => item.categoryName?.toLowerCase() === categoryName
    );
    setPosts(filterPosts);
    setTotal(filterPosts.length);
    setItemPerPage(ItemPerPage(filterPosts.length, currentPage, page_size));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [currentPage, categoryName]);
  return (
    <>
      <HeadCommon title={`Bài viết ${upperCaseTitle(String(categoryName))}`} />
      {!loading
        ? (
        <Box w={'100%'}>
          <Box padding={'0 6vw'} mt={'68px'}>
            <HeadingPage
              headingText={`Bài viết ${upperCaseTitle(
                String(categoryName)
              )} (${total})`}
              text={`${itemPerPage} trong tổng số ${total} bài viết`}
            />
            <Divider colorScheme={'primaryColor'} mb={'40px'} />
            <Grid
              w={'100%'}
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(12, 1fr)"
            >
              <GridItem colSpan={12}>
                <ImageCard data={posts} />
                {total > page_size && (
                  <Pagination
                    pageCount={Math.ceil(total / page_size)}
                    handlePageClick={(e) =>
                      setCurrentPage(Number((e.currentTarget as HTMLButtonElement).value))
                    }
                    activePagination={currentPage}
                  />
                )}
              </GridItem>
            </Grid>
          </Box>
        </Box>
          )
        : (
        <SkeletonIndex />
          )}
    </>
  );
};

export default CategoryName;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      layout: LayoutType.Common,
      linksConnect: false
    }
  };
};

export async function getStaticPaths () {
  return {
    paths: ['/home/:categoryName', { params: { categoryName: 'second-post' } }],
    fallback: true
  };
}
