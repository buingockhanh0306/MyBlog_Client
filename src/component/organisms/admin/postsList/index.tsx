import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ImageBorderZoom from '@src/component/atoms/admin/Image/ImageBorderZoom';
import { IPostProps } from '@src/types/postsType';
import { GetDate } from '@src/utils/getDate';
import { useRouter } from 'next/router';
import CategoryTag from '@src/component/atoms/admin/CategoryTag';
import { useTranslation } from 'react-i18next';

const PostsList: React.FC<IPostProps> = ({ posts }) => {
  const { t } = useTranslation('postsLocale');
  const router = useRouter();
  const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <Box mt={'40px'}>
      {posts?.map((post) => (
        <Flex
          flexDirection={{ md: 'row', base: 'column' }}
          key={post.slug}
          gap={6}
          my={{ md: '30px', base: '60px' }}
        >
          <Box
            boxSize="sm"
            w={{ md: '60%', base: '100%' }}
            overflow={{ md: 'hidden', base: 'none' }}
            rounded={'20px'}
            onClick={() => router.push(`/admin/posts/${post.slug}`)}
            h={'200px'}
          >
            <ImageBorderZoom
              src={
                post.thumbnail
                  ? `${imageURL}${post.thumbnail}`
                  : '/images/noImage.jpg'
              }
            />
          </Box>

          <Box w={'100%'}>
            <CategoryTag text={post?.categoryName} />
            <Text
              color={'primaryColor'}
              fontSize={'2xl'}
              fontWeight={'semibold'}
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/admin/posts/${post.slug}`)}
            >
              {post.title}
            </Text>
            <Text mt={'12px'} noOfLines={4} color={'textColor'}>
              {post.description}
            </Text>
            <Text mt={'6px'}>
              {t('updatedAt') + GetDate(String(post.updatedAt))}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default PostsList;
