import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

interface IPaginationProps {
  pageCount: number;
  handlePageClick: (e: React.MouseEvent<HTMLElement>) => void;
  activePagination: number;
}
const Pagination: React.FC<IPaginationProps> = ({
  pageCount,
  handlePageClick,
  activePagination
}) => {
  const arr = [];
  for (let i = 0; i < pageCount; i++) {
    arr.push(i);
  }

  return (
    <Flex width={'100%'} margin={'20px auto'} justifyContent={'center'}>
      {arr.map((item, index) => (
        <Box
          key={index}
          _hover={{ border: '1px solid #DD6B20' }}
          as="button"
          bg={activePagination === index + 1 ? '#DD6B20' : 'transparent'}
          borderRadius="md"
          color={activePagination === index + 1 ? '#fff' : '#DD6B20'}
          display={'inline'}
          h={10}
          mx={2}
          value={index + 1}
          w={10}
          onClick={handlePageClick}
        >
          {index + 1}
        </Box>
      ))}
    </Flex>
  );
};

export default Pagination;
