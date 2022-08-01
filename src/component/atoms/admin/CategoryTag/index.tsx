import React from 'react';
import { Box } from '@chakra-ui/react';

interface ICategoryTag {
  text: string | undefined;
  onClick?: () => void;
  hoverPointer?: boolean;
}
const CategoryTag: React.FC<ICategoryTag> = ({
  text,
  onClick,
  hoverPointer = false
}) => {
  return (
    <Box
      bgColor={'hoverColor'}
      rounded={'10px'}
      padding={'6px'}
      color={'white'}
      width={'100%'}
      display={'inline'}
      fontSize={'sm'}
      _hover={hoverPointer ? { cursor: 'pointer' } : { cursor: 'default' }}
      onClick={onClick}
    >
      {text}
    </Box>
  );
};

export default CategoryTag;
