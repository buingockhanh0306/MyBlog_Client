import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import HeadingHome from "@src/component/atoms/common/heading";

interface IHeadingPageProps{
    text?: string,
    headingText: string
}
const HeadingPage: React.FC<IHeadingPageProps> = ({text, headingText}) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'}>
            <HeadingHome as={'h1'} text={headingText} fontSize={'4xl'}/>
            <Text display={{md: 'block', base: 'none'}} color={'primaryColor'}>{text}</Text>
        </Flex>
    );
};

export default HeadingPage;