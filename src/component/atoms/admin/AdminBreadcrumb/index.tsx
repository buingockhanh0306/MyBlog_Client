import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface ILink {
  link: {
    text: string;
    href?: string;
    isCurrent?: boolean;
  }[];
}
const AdminBreadcrumb: React.FC<ILink> = ({ link }) => {
  return (
    <Flex
      color={'primaryColor'}
      gap={1}
      mb={'20px'}
      flexDirection={{ md: 'row', base: 'column' }}
      mt={{ md: 'auto', base: '10px' }}
    >
      {link.map((item) => {
        if (item.isCurrent) {
          return <Text key={item.href}>{item.text}</Text>;
        }
        return (
          <Link key={item.href} href={item.href || ''}>
            {item.text}
          </Link>
        );
      })}
    </Flex>
  );
};

export default AdminBreadcrumb;
