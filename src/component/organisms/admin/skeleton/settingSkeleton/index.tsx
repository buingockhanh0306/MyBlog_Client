import React from 'react';
import HeadAdmin from "@src/component/molecules/admin/headAdmin";
import {
    Box,
    Button,
    Flex, Image, Link,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Skeleton, SkeletonCircle, Stack, Text
} from "@chakra-ui/react";
import HeadingChakra from "@src/component/atoms/admin/Heading";
import {ChevronDownIcon} from "@chakra-ui/icons";
import Contact from "@src/component/organisms/admin/contact";
import {arrContact} from "@src/constant/listContact";
import ContactList from "@src/component/organisms/admin/contactList";
import InputText from "@src/component/atoms/admin/Input/inputText";
import ButtonSolid from "@src/component/atoms/admin/Button/ButtonSolid";
import IconButtonChakra from "@src/component/atoms/admin/Button/IconButtonChakra";
import {AiOutlineDelete} from "react-icons/ai";

const SettingSkeleton = () => {
    const arr = []
    for(let i=0; i<5; i++){
        arr.push(
            <Flex
                justifyContent={'space-between'}
                alignItems={{md: 'center', base: 'flex-start'}}
                flexDirection={{md: 'row', base: 'column'}}
            >
                <Flex alignItems={'center'}>
                    <SkeletonCircle mr={'12px'} w={'50px'} h={'50px'} />
                    <Skeleton h={'20px'} w={'160px'}/>
                </Flex>

                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    w={{md: '60%', base: '100%'}}
                    mt={{md: 'auto', base: '10px'}}
                    mb={{md: 'auto', base: '20px'}}
                    gap={{md: 'auto', base: 8}}
                >
                    <Skeleton h={'20px'} w={'400px'}/>
                    <Skeleton h={'20px'} w={'20px'} mr={{md: '40px', base: '0'}}/>
                </Flex>


            </Flex>
        )
    }
    return (
        <>
            <Box padding={{md: 'auto', base: '10px'}}>
                <Skeleton h={'50px'} w={'200px'}/>
                <Flex ml={{md: '40px', base: 'auto'}} mt={'40px'} gap={4} alignItems={'center'}>
                    <Skeleton h={'40px'} w={'200px'}/>
                    <Skeleton h={'40px'} w={'160px'}/>
                </Flex>
            </Box>

            <Box padding={{md: 'auto', base: '10px'}} mt={'20px'}>
                <Skeleton h={'50px'} w={'200px'}/>
                <Flex
                    gap={{md: 4, base: 4}}
                    mt={{md: 'auto', base: '20px'}}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    flexDirection={{md: 'row', base:'column'}}
                    padding={{md: '40px', base: '10px'}}
                >
                    <Skeleton h={'40px'} w={'200px'}/>
                    <Box w={'100%'}>
                        <Skeleton h={'40px'} w={'auto'}/>
                    </Box>
                    <Box>
                        <Skeleton h={'40px'} w={'200px'}/>
                    </Box>
                </Flex>
                <Stack ml={{md: '40px', base: 'auto'}} mt={'20px'}>
                    {arr}
                </Stack>
            </Box>
        </>
    );
};

export default SettingSkeleton;