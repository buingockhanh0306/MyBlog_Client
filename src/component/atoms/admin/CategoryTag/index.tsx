import React from 'react';
import {Box} from "@chakra-ui/react";

interface ICategoryTag{
    text: string | undefined
}
const CategoryTag:React.FC<ICategoryTag> = ({text}) => {
    return (
        <Box
            bgColor={'primaryColor'}
            rounded={'10px'}
            padding={'4px'}
            color={'white'}
            width={'100%'}
            display={'inline'}
            fontSize={'sm'}
        >
            {text}
        </Box>
    );
};

export default CategoryTag;