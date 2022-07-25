import React from 'react';
import { Stack, Text, Textarea} from "@chakra-ui/react";
import {ITextareaProps} from "@src/component/atoms/admin/TextareaChakra/ITextarea";

const TextAreaChakra: React.FC<ITextareaProps> = ({text, placeholder, value, error, onChange}) => {
    return (
        <Stack spacing={2} mt={'20px'}>
            <Text color={'primaryColor'} fontSize={'lg'} fontWeight={'bold'}>{text}</Text>
            <Textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                minHeight={'180px'}
            />
            <Text color={'red'} fontSize={'xs'}>{error}</Text>
        </Stack>
    );
};

export default TextAreaChakra;