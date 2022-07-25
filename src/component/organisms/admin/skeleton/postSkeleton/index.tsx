import React from 'react';
import {Box, Flex, Skeleton, Stack} from "@chakra-ui/react";
import {ISkeleton} from "@src/component/organisms/admin/skeleton/ISkeleton";

const PostIndexSkeleton: React.FC<ISkeleton> = ({numberRecord}) => {
    const arr = []
    for(let i = 0; i< numberRecord; i++){
        arr.push(
            <Box key={i}>
                <Flex
                    gap={6}
                    w={'100%'}
                    flexDirection={{md: 'row', base: 'column'}}
                    mb={{md: 'auto', base: '60px'}}
                >
                    <Skeleton w={{md: '380px', base: '100%'}} h={'200px'}/>
                    <Flex flexDirection={'column'} w={{md: '70%', base: '100%'}} gap={3}>
                        <Skeleton w={'140px'} h={'24px'}/>
                        <Skeleton w={'300px'} h={'30px'}/>
                        <Skeleton h={'12px'} w={'100%'}/>
                        <Skeleton h={'12px'}/>
                        <Skeleton h={'12px'}/>
                        <Skeleton w={'280px'} h={'16px'}/>
                    </Flex>
                </Flex>
            </Box>
        )
    }
    return (
        <Stack padding={'20px 20px'}>
            <Skeleton h={'50px'} w={'300px'}/>
            <Flex
                flexDirection={{md: 'row', base: 'column'}}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={2}
            >
                <Skeleton h={'50px'} w={'260px'}/>
                <Skeleton h={'40px'} w={'320px'} mb={{md: 'auto', base: '60px'}}/>
            </Flex>
            {arr}
        </Stack>
    );
};

export default PostIndexSkeleton;