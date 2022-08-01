import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { Flex } from '@chakra-ui/react';

const ArrowToTop = () => {
  return (
    <Flex
      bgColor={'hoverColor'}
      h={'50px'}
      w={'50px'}
      rounded={'full'}
      justifyContent={'center'}
      alignItems={'center'}
      position={'fixed'}
      bottom={'40px'}
      right={'40px'}
      fontSize={'xl'}
      fontWeight={'bold'}
      color={'white'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <IoIosArrowUp />
    </Flex>
  );
};

export default ArrowToTop;
