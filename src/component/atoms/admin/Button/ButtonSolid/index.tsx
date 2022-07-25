import React from 'react';
import {Button} from "@chakra-ui/react";
import {IButton} from "@src/component/atoms/admin/Button/IButton";

const ButtonSolid: React.FC<IButton> = ({isLoading, width, text, onClick, size}) => {
    return (
        <Button
            isLoading={isLoading}
            size={size}
            width={width}
            bgColor={'primaryColor'}
            variant='solid'
            _hover={{bgColor: 'hoverColor'}}
            _active={{bgColor: 'primaryColor'}}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default ButtonSolid;