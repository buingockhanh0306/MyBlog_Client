import React from 'react';
import {Text} from "@chakra-ui/react";

interface IHeadingHomeProps{
    as?: any,
    title?: string,
    fontSize?: string,
    text: string
}
const HeadingHome: React.FC<IHeadingHomeProps> = ({as, text,  title, fontSize = '2xl'}) => {
    return (
        <Text
            as={as}
            title={title}
            fontWeight={'semibold'}
            fontSize={fontSize}
            mb={'20px'}
            color={'primaryColor'}
            noOfLines={1}
        >
            {text}
        </Text>
    );
};

export default HeadingHome;