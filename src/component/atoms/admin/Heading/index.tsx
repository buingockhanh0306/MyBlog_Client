import React from 'react';
import {Text} from "@chakra-ui/react";

interface IHeading {
    text: string,
    fontSize?: string,
    title?: string
}
const HeadingChakra: React.FC<IHeading> = ({text, title, fontSize='3xl'}) => {
    return (
        <Text
            as={'h1'}
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

export default HeadingChakra;
