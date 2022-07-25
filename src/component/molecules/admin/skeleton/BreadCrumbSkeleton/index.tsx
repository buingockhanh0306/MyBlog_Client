import React from 'react';
import {Skeleton, Stack} from "@chakra-ui/react";

const BreadcrumbSkeleton = () => {
    return (
        <Stack>
            <Skeleton h={'12px'} w={{md: '300px', base: '180px'}}/>
            <Skeleton display={{md: 'none', base: 'block'}} h={'12px'} w={{md: '300px', base: '200px'}} />
        </Stack>
    );
};

export default BreadcrumbSkeleton;