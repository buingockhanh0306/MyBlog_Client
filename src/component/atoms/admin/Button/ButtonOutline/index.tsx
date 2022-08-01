import React from 'react';
import { Button } from '@chakra-ui/react';
import { IButton } from '@src/component/atoms/admin/Button/IButton';

const ButtonOutline: React.FC<IButton> = ({
  isLoading,
  text,
  size,
  onClick
}) => {
  return (
    <Button
      isLoading={isLoading}
      onClick={onClick}
      size={size}
      variant="outline"
      color={'primaryColor'}
      borderColor={'primaryColor'}
      _hover={{ bgColor: 'hoverColor', color: 'white' }}
      _active={{ bgColor: 'primaryColor' }}
    >
      {text}
    </Button>
  );
};

export default ButtonOutline;
