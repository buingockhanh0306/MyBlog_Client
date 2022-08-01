import React from 'react';
import { Input, Stack, Text } from '@chakra-ui/react';
import { IInputProps } from '@src/component/atoms/admin/Input/IInputProps';

const InputText: React.FC<IInputProps> = ({
  text,
  placeholder,
  value,
  error,
  onChange,
  isDisabled
}) => {
  return (
    <Stack spacing={2} mt={'20px'}>
      <Text color={'primaryColor'} fontSize={'lg'} fontWeight={'bold'}>
        {text}
      </Text>
      <Input
        disabled={isDisabled}
        variant="filled"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Text color={'red'} fontSize={'xs'}>
        {error}
      </Text>
    </Stack>
  );
};

export default InputText;
