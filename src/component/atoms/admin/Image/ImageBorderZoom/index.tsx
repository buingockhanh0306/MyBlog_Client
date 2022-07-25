import React from 'react';
import {Image} from "@chakra-ui/react";
import {IImage} from "@src/component/atoms/admin/Image/IImage";

const ImageBorderZoom: React.FC<IImage> = ({src, alt}) => {
    return (
        <Image
            rounded={'20px'}
            overflow={'hidden'}
            w={'100%'}
            height={'200px'}
            objectFit={'cover'}
            src={src}
            alt={alt}
            transition="0.3s ease-in-out"
            _hover={{
                cursor: 'pointer',
                transform: 'scale(1.05)',
            }}
        />
    );
};

export default ImageBorderZoom;