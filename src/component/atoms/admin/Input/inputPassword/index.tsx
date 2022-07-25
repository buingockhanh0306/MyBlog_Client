import React, {useState} from 'react';
import {InputGroup, InputRightElement} from "@chakra-ui/input";
import {Button, Input, Stack, Text} from "@chakra-ui/react";
import {IInputProps} from "@src/component/atoms/admin/Input/IInputProps";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const InputPassword: React.FC<IInputProps> = ({text, placeholder, value, error, onChange}) => {
    const [show, setShow] = useState<boolean>(false)

    const handleClick = () =>{
        setShow(!show)
    }
    return (
        <Stack spacing={2} my={'20px'}>
            <Text color={'primaryColor'} fontSize={'lg'} fontWeight={'bold'}>{text}</Text>
            <InputGroup size='md'>
                <Input
                    placeholder={placeholder}
                    value={value}
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    onChange={onChange}
                />
                <InputRightElement width='4.5rem'>
                    <Button
                        bgColor={'transparent'}
                        _active={{bgColor: 'transparent'}}
                        _hover={{bgColor: 'transparent'}}
                        size='md'
                        color={'primaryColor'}
                        onClick={handleClick}
                    >
                        {show ? <FaRegEyeSlash/> : <FaRegEye/>}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Text color={'red'} fontSize={'xs'}>{error}</Text>
        </Stack>
    );
};

export default InputPassword;