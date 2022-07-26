import React, {useEffect, useState} from 'react';
import {GetStaticProps} from "next";
import {LayoutType} from "@src/types/LayoutType";
import {Box, Divider, Grid, GridItem} from "@chakra-ui/react";
import ImageCard from "@src/component/organisms/common/imageCard";
import {postsService} from "@src/services";
import Pagination from "@src/component/molecules/admin/pagination";
import HeadingPage from "@src/component/molecules/common/headingPage";
import {ItemPerPage} from "@src/utils/itemPerPage";
import SkeletonIndex from "@src/component/organisms/common/skeleton";
import HeadCommon from "@src/component/molecules/common/headCommon";
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';


const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    const [total, setTotal] = useState<number>(0)
    const [itemPerPage, setItemPerPage] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const page_size = 6
    const getData = async () =>{
        const postsData = await postsService.get(currentPage)
        setPosts(postsData.data.posts)
        setTotal(postsData.data.total)
        setItemPerPage(ItemPerPage(postsData.data.total, currentPage, page_size))
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[currentPage])
    return (
        <>
            <HeadCommon title={'My Blog'}/>
            {!loading ?
            <Box w={'100%'}>
                <Box padding={'0 6vw'}>
                    <HeadingPage
                        headingText={`Tất cả bài viết (${total})`}
                        text={`${itemPerPage} trong tổng số ${total} bài viết`}
                    />
                    <Divider colorScheme={'primaryColor'} mb={'40px'}/>
                    <Grid
                        h='200px'
                        w={'100%'}
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(12, 1fr)'
                    >
                        <GridItem colSpan={12}>
                            <ImageCard data={posts}/>
                            {total > page_size && <Pagination
                                pageCount={Math.ceil(total / page_size)}
                                handlePageClick={(e) => setCurrentPage(Number((e.currentTarget as any).value))}
                                activePagination={currentPage}
                            />}
                        </GridItem>
                    </Grid>
                    <MessengerCustomerChat
                        pageId="105436068727274"
                        appId="357791826543032"
                    />
                </Box>
            </Box> : <SkeletonIndex/>}
        </>

    );
};

export default HomePage;
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            layout: LayoutType.Common,
            linksConnect: false,
        },
    };
};