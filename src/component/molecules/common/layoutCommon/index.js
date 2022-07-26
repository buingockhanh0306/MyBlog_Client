import React, {useEffect, useState} from 'react';
import {
    Box,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton, Image,
    Text, useDisclosure
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {categoriesService} from "../../../../services";
import {FaBars} from "react-icons/fa";

const LayoutCommon = ({children}) => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [categories, setCategories] = useState([])
    const getData = async () =>{
        const categoriesData = await categoriesService.get(0)
        setCategories(categoriesData.data)
    }
    useEffect(()=>{
        getData()
    },[])

    const handleClickSideBar = (slug)=>{
        router.push(`/home/${slug}`)
        onClose()
    }

    const renderSidebarMobile = ()=>{
        return(
            <Box as={'ul'}>
                {
                    categories.map((item, index)=>(
                        <Text
                            key={index}
                            as={'h3'}
                            py={'10px'}
                            fontSize={'lg'}
                            fontWeight={'semibold'}
                            onClick={()=>handleClickSideBar(item.slug)}
                        >
                            {item.name}
                        </Text>
                    ))
                }
            </Box>
        )
    }

    return (
       <Box>
           <Box
               bgColor={'primaryColor'}
               color={'white'}
               w={'100%'}
               h={'68px'}
               boxShadow={'lg'}
               position={'fixed'}
               top={0}
               left={0}
               right={0}
               zIndex={10}
           >
               <Flex
                   // justifyContent={'space-around'}
                   alignItems={'center'}
                   h={'100%'}
                   px={'24px'}
               >
                   <IconButton
                       icon={<FaBars />}
                       bgColor={'transparent'}
                       size={'lg'}
                       color={'white'}
                       _active={{
                           bgColor: 'transparent'
                       }}
                       _hover={{
                           bgColor: 'transparent'
                       }}
                       display={{md: 'none', sm:'block'}}
                       onClick={onOpen}
                   />

                    <Heading
                        onClick={()=>router.push('/home')}
                        _hover={{cursor: 'pointer'}}
                        ml={'10px'}
                    >
                        LOGO
                    </Heading>
                    <Box as={'ul'} ml={'60px'} display={{md: 'block', base: 'none'}}>
                        {categories.map((item, index)=>(
                            <Text
                                color={item.slug === router.query.categoryName ? 'white': '#ccc'}
                                key={index}
                                display={'inline'}
                                mx={'20px'}
                                as={'li'}
                                fontWeight={'semibold'}
                                _hover={{
                                    cursor: 'pointer'
                                }}
                                onClick={()=>router.push(`/home/${item.slug}`)}
                            >
                                {item.name}
                            </Text>
                        ))}
                    </Box>

                   <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size={'full'}>
                       <DrawerOverlay />
                       <DrawerContent  color={'primaryColor'}>
                           <DrawerCloseButton />
                           <DrawerHeader>Menu</DrawerHeader>
                           <DrawerBody textAlign={'center'} px={0}>
                               {renderSidebarMobile()}
                           </DrawerBody>
                       </DrawerContent>
                   </Drawer>

               </Flex>
           </Box>
           <Image
               alt={'banner'}
               mt={'68px'}
               mb={'40px'}
               w={"100%"}
               height={'200px'}
               src={'/images/banner.jpg'}
               objectFit={'cover'}
           />
           {children}
       </Box>
    );
};

export default LayoutCommon;