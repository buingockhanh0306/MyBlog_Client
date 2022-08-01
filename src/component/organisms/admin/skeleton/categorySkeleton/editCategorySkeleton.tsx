import React from 'react';
import { Box, Flex, Skeleton } from '@chakra-ui/react';
import BreadcrumbSkeleton from '@src/component/molecules/admin/skeleton/BreadCrumbSkeleton';
import GroupButtonSkeleton from '@src/component/molecules/admin/skeleton/GroupButtonSkeleton';

const EditCategorySkeleton: React.FC = (): JSX.Element => {
  return (
    <Box padding={{ md: 'auto', base: '10px 10px' }}>
      <BreadcrumbSkeleton />

      <Skeleton marginTop={'20px'} h={'50px'} w={{ md: '30%', base: '80%' }} />

      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'200px'} />
        <Skeleton h={'34px'} />
      </Flex>

      <Flex flexDirection={'column'} gap={4} marginTop={'30px'}>
        <Skeleton h={'20px'} w={'160px'} />
        <Skeleton h={'34px'} />
      </Flex>

      <GroupButtonSkeleton />
    </Box>
  );
};

export default EditCategorySkeleton;
