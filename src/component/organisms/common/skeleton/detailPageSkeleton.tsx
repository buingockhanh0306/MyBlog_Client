import React from 'react';
import {Box, Flex, Grid, GridItem, Skeleton} from "@chakra-ui/react";


const DetailPageSkeleton = () => {
    const renderLine = (numberLine: number)=>{
        const arr = []
        for(let i = 0; i<numberLine; i++){
            arr.push(<Skeleton h={'14px'} w={i===numberLine-1 ? '40%': '100%'} my={'20px'}/>)
        }
        return arr
    }

    const renderItemPost = (numberPost: number)=>{
        const arr = []
        for(let i =0; i<numberPost; i++){
            arr.push(
                <Flex gap={4} my={'16px'}>
                    <Skeleton w={'40px'} h={'40px'}/>
                    <Flex gap={2} flexDirection={'column'}>
                        <Skeleton w={'150px'} h={'14px'}/>
                        <Skeleton w={'200px'} h={'14px'}/>
                    </Flex>
                </Flex>
            )
        }
        return arr
    }
    return (
        <Box padding={'0 6vw'}>
            <Grid
                h='2000px'
                w={'100%'}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(12, 1fr)'
                px={'8px'}
            >
                <GridItem colSpan={{md: 9, base: 12}}>
                        <Skeleton h={'60px'} w={'40%'}/>
                        <Skeleton h={'14px'} w={'30%'} my={'20px'}/>
                        <Skeleton h={'20px'} w={'120px'}/>
                        <Box>
                            {renderLine(5)}
                        </Box>
                        <Skeleton h={'400px'} w={'100%'}/>
                        <Box>
                            <Skeleton mt={'30px'} h={'20px'} w={'30%'}/>
                            {renderLine(10)}
                            <Skeleton mt={'30px'} h={'20px'} w={'30%'}/>
                            {renderLine(10)}
                        </Box>
                </GridItem>
                <GridItem colSpan={{md: 3, base: 0}} display={{md: 'block', base: 'none'}}>
                    <Box padding={'0 16px'}>
                        <Skeleton w={'30%'} h={'20px'} mb={'40px'}/>
                        {renderItemPost(6)}
                    </Box>

                </GridItem>

            </Grid>
        </Box>
    );
};

export default DetailPageSkeleton;