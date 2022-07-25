import React from 'react';
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import HeadingHome from "@src/component/atoms/common/heading";
import {IPost} from "@src/component/organisms/admin/createPostForm";
import {GetDate} from "@src/utils/getDate";
import {readingTime} from "@src/utils/readingTime";
import {useRouter} from "next/router";

interface ISidebarDetailProps{
    data: IPost[]
}
const SidebarDetail: React.FC<ISidebarDetailProps> = ({data}) => {
    const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL
    const router = useRouter()
    return (
        <Box px={'8px'}>
            <HeadingHome text={'Đề xuất'} fontSize={'lg'}/>
            {
                data.map((item, index)=>(
                    <Flex
                        key={index}
                        mb={'12px'}
                        gap={3}
                        rounded={'md'}
                        _hover={{
                            bgColor: 'hoverColor',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                        onClick={()=>router.push(`/home/detail/${item.slug}`)}
                    >
                        <Image
                            height={'50px'}
                            w={'50px'}
                            rounded={'md'}
                            src={imageURL+item.thumbnail}
                        />
                        <Flex flexDirection={'column'} justifyContent={'center'}>
                            <Text fontWeight={'semibold'}>{item.title}</Text>
                            <Text fontSize={'sm'}>
                                {GetDate(String(item.updatedAt))} - {readingTime(item.content)} phút đọc
                            </Text>
                        </Flex>
                    </Flex>
                ))
            }
        </Box>
    );
};

export default SidebarDetail;