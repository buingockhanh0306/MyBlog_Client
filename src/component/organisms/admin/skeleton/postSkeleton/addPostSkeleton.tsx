import React from 'react';
import {Box, Flex, Skeleton, Stack} from "@chakra-ui/react";
import GroupButtonSkeleton from "@src/component/molecules/admin/skeleton/GroupButtonSkeleton";
import BreadcrumbSkeleton from "@src/component/molecules/admin/skeleton/BreadCrumbSkeleton";

const AddPostSkeleton = () => {
    return (
        <Box padding={{md: 'auto', base:'10px 10px'}}>
            <BreadcrumbSkeleton/>
            <Skeleton marginTop={'20px'} h={'50px'} w={'300px'}/>

            {/*Input*/}
            <Flex flexDirection={'column'} gap={4} marginTop={'30px'} >
                <Skeleton h={'20px'} w={'200px'}/>
                <Skeleton h={'40px'}/>
            </Flex>

            {/*Input*/}
            <Flex flexDirection={'column'} gap={4} marginTop={'30px'} >
                <Skeleton h={'20px'} w={'160px'}/>
                <Skeleton h={'40px'}/>
            </Flex>

            {/*Select Category*/}
            <Box marginTop={'20px'}>
                <Skeleton w={'200px'} h={'40px'}/>
            </Box>

            {/*Description*/}
            <Flex flexDirection={'column'} gap={4} marginTop={'30px'} >
                <Skeleton h={'20px'} w={'160px'}/>
                <Skeleton h={'140px'}/>
            </Flex>

            {/*Image*/}
            <Flex flexDirection={'column'} gap={4} marginTop={'30px'} >
                <Skeleton h={'20px'} w={'160px'}/>
                <Flex justifyContent={'center'}>
                    <Skeleton borderRadius={'20px'} h={'200px'} w={'70%'}/>
                </Flex>
            </Flex>

            {/*Content*/}
            <Flex flexDirection={'column'} gap={4} marginTop={'30px'} >
                <Skeleton h={'20px'} w={'160px'}/>
                <Skeleton h={'100px'}/>
            </Flex>

            {/*Button*/}
            <GroupButtonSkeleton/>


        </Box>
    );
};

export default AddPostSkeleton;