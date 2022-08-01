import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

const GroupButtonSkeleton = () => {
  return (
    <Flex
      gap={4}
      marginTop={'30px'}
      justifyContent={'flex-end'}
      flexDirection={{ md: 'row', base: 'column' }}
    >
      <Skeleton h={'40px'} w={{ md: '100px', base: '100%' }} />
      <Skeleton h={'40px'} w={{ md: '120px', base: '100%' }} />
    </Flex>
  );
};

export default GroupButtonSkeleton;
