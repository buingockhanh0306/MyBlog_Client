import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { LayoutType } from '@src/types/LayoutType';
import { useRouter } from 'next/router';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import DetailPage from '@src/component/organisms/common/detailPage';
import { postsService } from '@src/services';
import SidebarDetail from '@src/component/organisms/common/SidebarDetail';
import DetailPageSkeleton from '@src/component/organisms/common/skeleton/detailPageSkeleton';
import HeadCommon from '@src/component/molecules/common/headCommon';
import ArrowToTop from '@src/component/molecules/common/arrowToTop';
import { IPost } from '@src/component/organisms/admin/createPostForm';

const DetailPost = () => {
  const router = useRouter();
  const slug = String(router.query.slug);
  const [loading, setLoading] = useState<boolean>(true);
  const [positionPage, setPositionPage] = useState<number>(0);
  const [post, setPost] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    thumbnail: '',
    updatedAt: '',
    categoryId: '',
    categoryName: ''
  });
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const getDetailPost = await postsService.getDetail(slug);
    setPost(getDetailPost.data);
  };
  const getPosts = async () => {
    const getPostsData = await postsService.get(0);
    // Lấy tất cả những bài viết còn lại
    setPosts(getPostsData.data.posts.filter((item: IPost) => item.slug !== slug));
    setLoading(false);
  };
  useEffect(() => {
    getData();
    getPosts();
  }, [slug]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPositionPage(window.scrollY);
    });
  }, []);

  return (
    <>
      <HeadCommon title={post.title} />
      {!loading
        ? (
        <Box padding={'0 6vw'}>
          <Grid
            w={'100%'}
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem colSpan={{ md: 9, base: 12 }}>
              <DetailPage data={post} />
            </GridItem>
            <GridItem
              colSpan={{ md: 3, base: 0 }}
              display={{ md: 'block', base: 'none' }}
            >
              <SidebarDetail data={posts} />
            </GridItem>
          </Grid>
        </Box>
          )
        : (
        <DetailPageSkeleton />
          )}
      {positionPage > 500 && <ArrowToTop />}
    </>
  );
};

export default DetailPost;

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
    paths: ['/home/detail/:slug', { params: { slug: 'second-post' } }],
    fallback: true
  };
}
