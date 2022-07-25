import React from 'react';
import {Flex, Image, Text} from "@chakra-ui/react";
import {IPost} from "@src/component/organisms/admin/createPostForm";
import {readingTime} from "@src/utils/readingTime";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import ButtonSolid from "@src/component/atoms/admin/Button/ButtonSolid";
import {useRouter} from "next/router";

interface IImageCardProps {
    data: IPost[]
}
const ImageCard: React.FC<IImageCardProps> = ({data}) => {
    const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL
    const router = useRouter()

    return (
        <Flex flexWrap={'wrap'}>
            {
                data.map((item, index)=>(
                    <Flex key={index} flexDirection={'column'} w={{md: '33%', base: '100%'}} mb={'40px'} px={'26px'}>
                        <Image
                            rounded={'4px'}
                            w={'100%'}
                            height={'200px'}
                            objectFit={'cover'}
                            src={imageURL + item.thumbnail}
                            alt={item.title}
                            _hover={{cursor: 'pointer'}}
                            onClick={()=>router.push(`/home/detail/${item.slug}`)}
                        />
                        <Flex
                            bgColor={'orange.50'}
                            height={'40px'}
                            mt={'10px'}
                            mb={'20px'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            px={'10px'}
                        >
                            <Text letterSpacing={'1.4px'} fontWeight={'medium'}>{item.categoryName}</Text>
                            <Text fontSize={'xs'}>{readingTime(item.content)+' phút đọc'}</Text>
                        </Flex>
                        <HeadingChakra
                            title={item.title}
                            text={item.title}
                            fontSize={'xl'}
                        />
                        <Text
                            as={'p'}
                            noOfLines={4}
                            color={'textColor'}
                            textAlign={'justify'}
                            mb={'20px'}
                        >
                            {item.description}
                        </Text>
                        <ButtonSolid
                            text={'Đọc chi tiết'}
                            size={'md'}
                            width={'40%'}
                            onClick={()=>router.push(`/home/detail/${item.slug}`)}
                        />
                    </Flex>
                ))
            }

        </Flex>
    );
};

export default ImageCard;