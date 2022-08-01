import React from 'react';
import { IconButton } from '@chakra-ui/react';

interface IIconButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}
const IconButtonChakra: React.FC<IIconButtonProps> = ({ icon, onClick }) => {
  return (
    <IconButton
      color={'primaryColor'}
      aria-label=""
      size={'md'}
      icon={icon}
      bgColor={'transparent'}
      _hover={{ bgColor: 'transparent' }}
      _active={{ bgColor: 'transparent' }}
      onClick={onClick}
    />
  );
};

export default IconButtonChakra;
