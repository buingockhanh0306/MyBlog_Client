import React from 'react';
import {InputGroup, InputRightElement} from "@chakra-ui/input";
import {Box, Flex, IconButton, Input, Text} from "@chakra-ui/react";
import {CloseIcon, SearchIcon} from "@chakra-ui/icons";
import { IPost} from "@src/component/organisms/admin/createPostForm";
import {GetDate} from "@src/utils/getDate";
import {useRouter} from "next/router";
import {FaRegCalendarCheck} from "react-icons/fa";
import { isMatchSearch} from "@src/utils/isMatchSearch";

interface IInputSearchProps{
    value: string,
    placeholder?: string,
    onChange?: (e: React.FormEvent<HTMLInputElement>)=> void,
    searchValue: string,
    isHidden: boolean,
    data: IPost[],
    clickButton: ()=>void
}
const InputSearch:React.FC<IInputSearchProps> = ({
    onChange,
    isHidden,
    value,
    placeholder,
    data,
    searchValue,
    clickButton
}): JSX.Element => {

    const router = useRouter()
    return (
        <Box position={'relative'}>
            <InputGroup size='md' w={'100%'}>
                <Input
                    pr='4.5rem'
                    type={'text'}
                    placeholder={placeholder}
                    borderColor={'#DD6B20'}
                    value={value}
                    onChange={onChange}
                />
                <InputRightElement width='auto'>
                    <IconButton
                        size={'sm'}
                        mr={'4px'}
                        aria-label='Search database'
                        icon={searchValue ? <CloseIcon/> : <SearchIcon />}
                        color={'primaryColor'}
                        bgColor={'transparent'}
                        _hover={{bgColor: 'transparent'}}
                        _active={{bgColor: 'transparent'}}
                        onClick={clickButton}
                    />
                </InputRightElement>
            </InputGroup>

            <Box
                position={'absolute'}
                bgColor={'white'}
                top={'42px'}
                left={0}
                right={0}
                borderRadius={'10px'}
                display={isHidden ? 'none' : 'block'}
            >
            <Box
                boxShadow={'lg'}
                maxHeight={'300px'}
                overflow={'auto'}
                bgColor={'#f5f5f5'}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'hoverColor',
                        borderRadius: '24px',
                    },
                }}
            >
                {
                    data.map((item, index)=>{
                        return isMatchSearch(item.title, searchValue) &&
                            (
                                <Box
                                    padding={'4px 10px'}
                                    _hover={{
                                        bgColor: 'hoverColor',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}
                                    onClick={()=>router.push(`/admin/posts/${item.slug}`)}
                                >
                                    <Flex flexDirection={'column'}>
                                        <Text noOfLines={1} fontWeight={'semibold'}>{item.title}</Text>
                                        <Flex gap={2} alignItems={'center'} fontSize={'sm'}>
                                            <FaRegCalendarCheck/>
                                            <Text mt={'2px'}>{GetDate(String(item.updatedAt))}</Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                            )
                    })
                }
            </Box>

            </Box>
        </Box>

    );
};

export default InputSearch;