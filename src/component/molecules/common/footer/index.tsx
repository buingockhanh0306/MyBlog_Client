import React from 'react';
import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { contactProps } from '@src/types/contact';

interface IFooterProps {
  data: contactProps[];
}

const FooterCommon: React.FC<IFooterProps> = ({ data }) => {
  return (
    <Flex
      w={'100%'}
      h={'120px'}
      // bgGradient='linear(to-r, orange.300, yellow.400, orange.300)'
      flexDirection={'column'}
      bgColor={'primaryColor'}
      gap={4}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex gap={4}>
        {data.map((item) => (
          <Link
            key={item.slug}
            href={item.name === 'Email' ? `mailto:${item.url}` : item.url}
          >
            <Image
              display={'inline'}
              boxSize="2rem"
              borderRadius="full"
              src={item.icon}
              alt={item.name}
              mr="12px"
            />
          </Link>
        ))}
      </Flex>
      <Text color={'#f5f5f5'}>
        Copyright © 2022 Designed by Bui Ngoc Khanh{' '}
      </Text>
    </Flex>
  );
};

export default FooterCommon;
