import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import Link from "next/link";

interface ILink{
    link:{
        text: string,
        href?: string,
        isCurrent?:boolean
    }[]
}
const AdminBreadcrumb:React.FC<ILink> = ({link}) => {
    return (
       <Flex
           color={'primaryColor'}
           gap={1} mb={'20px'}
           flexDirection={{md: 'row', base: 'column'}}
           mt={{md: 'auto', base: '10px'}}
       >
           {
               link.map((item, index)=> {
                   if(item.isCurrent){
                       return <Text key={index}>{item.text}</Text>
                   }
                   return <Link key={index} href={item.href || ""}>{item.text}</Link>
               })
           }
       </Flex>
    );
};

export default AdminBreadcrumb;