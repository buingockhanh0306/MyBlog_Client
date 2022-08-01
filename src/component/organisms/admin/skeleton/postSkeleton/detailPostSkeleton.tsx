import React from 'react';
import { Box, Flex, Skeleton } from '@chakra-ui/react';
import BreadcrumbSkeleton from '@src/component/molecules/admin/skeleton/BreadCrumbSkeleton';

const DetailPostSkeleton: React.FC = (): JSX.Element => {
  return (
    <Box padding={{ md: 'auto', base: '10px' }}>
      <BreadcrumbSkeleton />
      <Flex
        justifyContent={'space-between'}
        flexDirection={{ md: 'row', base: 'column' }}
      >
        <Skeleton marginTop={'20px'} h={'50px'} w={'300px'} />
        {/* Button */}
        <Flex
          gap={4}
          marginTop={'30px'}
          justifyContent={{ md: 'flex-end', base: 'flex-start' }}
        >
          <Skeleton h={'40px'} w={'100px'} />
          <Skeleton h={'40px'} w={'120px'} />
        </Flex>
      </Flex>

      {/* Input */}
      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'200px'} />
        <Skeleton h={'40px'} />
      </Flex>

      {/* Input */}
      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'160px'} />
        <Skeleton h={'40px'} />
      </Flex>

      {/* Select Category */}
      <Box marginTop={'20px'}>
        <Skeleton w={'200px'} h={'40px'} />
      </Box>

      {/* Description */}
      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'160px'} />
        <Skeleton h={'12px'} />
        <Skeleton h={'12px'} />
        <Skeleton h={'12px'} />
      </Flex>

      {/* Image */}
      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'160px'} />
        <Skeleton borderRadius={'20px'} h={'200px'} w={'40%'} />
      </Flex>

      {/* Content */}
      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'160px'} />
        <Skeleton h={'12px'} />
        <Skeleton h={'12px'} />
        <Skeleton h={'12px'} />
        <Skeleton h={'12px'} />
        <Skeleton h={'12px'} />
      </Flex>
    </Box>
  );
};

export default DetailPostSkeleton;
