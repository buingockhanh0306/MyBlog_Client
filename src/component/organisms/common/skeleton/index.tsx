import React from 'react';
import {Box, Flex, Grid, GridItem, Skeleton, Stack} from "@chakra-ui/react";

const SkeletonIndex: React.FC = ():JSX.Element => {
    let arr = []

    for(let i = 0; i<6; i++){
            arr.push(
                <Flex key={i} flexDirection={'column'} w={{md: '33%', base: '100%'}} mb={'40px'} px={'26px'}>
                    <Skeleton
                        rounded={'4px'}
                        w={'100%'}
                        height={'200px'}
                    />
                    <Flex
                        height={'40px'}
                        mt={'10px'}
                        mb={'20px'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        px={'10px'}
                    >
                        <Skeleton h={'20px'} w={'40%'}/>
                        <Skeleton h={'20px'} w={'30%'}/>
                    </Flex>
                    <Stack>
                        <Skeleton h={'50px'} w={'90%'}/>
                        <Skeleton h={'12px'} w={'100%'}/>
                        <Skeleton h={'12px'} w={'100%'}/>
                        <Skeleton h={'12px'} w={'100%'}/>
                        <Skeleton h={'12px'} w={'100%'}/>
                        <Skeleton mt={'10px'} h={'40px'} w={'50%'}/>
                    </Stack>

                </Flex>
            )
        }

    return (
        <Box>
            <Box padding={'0 6vw'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} mb={'60px'}>
                    <Skeleton h={'50px'} w={'300px'}/>
                    <Skeleton h={'20px'} w={'240px'}/>
                </Flex>
                <Grid
                    h='200px'
                    w={'100%'}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(12, 1fr)'
                >
                    <GridItem colSpan={12}>
                        <Flex flexWrap={'wrap'}>
                            {arr}
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};

export default SkeletonIndex;