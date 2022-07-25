import React from 'react';
import {Button} from "@chakra-ui/react";
import {IButton} from "@src/component/atoms/admin/Button/IButton";

const ButtonIconOutline: React.FC<IButton> = ({text,leftIcon, size, onClick}) => {
    return (
        <Button
            variant='outline'
            size={size}
            leftIcon={leftIcon}
            color={'primaryColor'}
            borderColor={'primaryColor'}
            _hover={{bgColor: 'hoverColor', color: 'white'}}
            _active={{bgColor: 'primaryColor'}}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default ButtonIconOutline;