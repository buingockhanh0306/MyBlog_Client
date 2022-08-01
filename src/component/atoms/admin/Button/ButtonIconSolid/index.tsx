import React from 'react';
import { Button } from '@chakra-ui/react';
import { IButton } from '@src/component/atoms/admin/Button/IButton';

const ButtonIconSolid: React.FC<IButton> = ({
  leftIcon,
  text,
  size,
  onClick
}) => {
  return (
    <Button
      leftIcon={leftIcon}
      bgColor={'primaryColor'}
      variant="solid"
      _hover={{ bgColor: 'hoverColor' }}
      _active={{ bgColor: 'primaryColor' }}
      size={size}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonIconSolid;
