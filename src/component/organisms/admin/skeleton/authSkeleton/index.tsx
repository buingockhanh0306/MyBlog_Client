import React from 'react';
import { Flex, Skeleton, Stack } from '@chakra-ui/react';
import { ISkeleton } from '@src/component/organisms/admin/skeleton/ISkeleton';

const AuthIndexSkeleton: React.FC<ISkeleton> = ({
  numberRecord
}): JSX.Element => {
  const arr = [];
  for (let i = 0; i < numberRecord; i++) {
    arr.push(
      <Flex key={i} gap={10} justifyContent={'space-between'}>
        <Skeleton marginTop={'20px'} h={'30px'} w={'30px'} />
        <Skeleton marginTop={'20px'} h={'30px'} w={'200px'} />
        <Skeleton marginTop={'20px'} h={'30px'} w={'200px'} />
        <Skeleton marginTop={'20px'} h={'30px'} w={'30px'} />
        <Skeleton marginTop={'20px'} h={'30px'} w={'30px'} />
      </Flex>
    );
  }
  return (
    <Stack padding={'20px 20px'}>
      <Skeleton h={'50px'} w={'300px'} />
      <Skeleton h={'50px'} w={'260px'} />
      <Skeleton h={'30px'} />
      {arr}
    </Stack>
  );
};

export default AuthIndexSkeleton;
