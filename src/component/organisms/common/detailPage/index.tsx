import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import HeadingPage from '@src/component/molecules/common/headingPage';
import CategoryTag from '@src/component/atoms/admin/CategoryTag';
import { IPost } from '@src/component/organisms/admin/createPostForm';
import { GetDate } from '@src/utils/getDate';
import { readingTime } from '@src/utils/readingTime';

interface IDetailPost {
  data: IPost;
}
const DetailPage: React.FC<IDetailPost> = ({ data }) => {
  const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <Box px={{ md: '8px', base: '4px' }}>
      <Box mb={'20px'}>
        <HeadingPage headingText={data.title} />
        <Text color={'textColor'} mb={'10px'}>
          Đã đăng ngày {GetDate(String(data.updatedAt))} -{' '}
          {readingTime(data.content)} phút đọc
        </Text>
        <CategoryTag text={data.categoryName} />
      </Box>

      <Text textAlign={'justify'} as={'h2'} fontWeight={'semibold'}>
        {data.description}
      </Text>
      <Image
        alt={data.title}
        mb={'20px'}
        w={'100%'}
        height={'auto'}
        src={imageURL + data.thumbnail}
      />
      <Box
        mb={'40px'}
        as={'p'}
        textAlign={'justify'}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </Box>
  );
};

export default DetailPage;
