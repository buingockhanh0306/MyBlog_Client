import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export interface ITotalProps{
  data: {
    name: string,
    count: number
  }[]
}
const CountBlock: React.FC<ITotalProps> = ({ data }) => {
  return (
    <Flex justifyContent={'space-around'} gap={6}>
      {data?.map(item => (
        <Flex
          key={item.name}
          w={'300px'}
          height={'150px'}
          bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          rounded={'20px'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={4}
        >
          <Text color={'textColor'} fontWeight={'bold'} fontSize={'2xl'}>{item.name}</Text>
          <Text color={'textColor'} fontWeight={'bold'} fontSize={'4xl'}>{item.count}</Text>
        </Flex>
      ))}

    </Flex>
  );
};

export default CountBlock;
