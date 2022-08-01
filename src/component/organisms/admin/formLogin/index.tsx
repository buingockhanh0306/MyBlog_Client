import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import InputText from '@src/component/atoms/admin/Input/inputText';
import { useFormLogin } from '@src/hook/useFormLogin';
import InputPassword from '@src/component/atoms/admin/Input/inputPassword';
import ButtonSolid from '@src/component/atoms/admin/Button/ButtonSolid';

interface IFormValue {
  username: string;
  password: string;
}
interface IFormLoginProps {
  onSubmit: (formValue: IFormValue) => void;
  msgError: string;
}

const FormLogin: React.FC<IFormLoginProps> = ({ onSubmit, msgError }) => {
  const { formValue, setFormValue, errors, setErrors, validation } =
    useFormLogin({ username: '', password: '' });

  const handleChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      username: e.currentTarget.value
    });
    setErrors(undefined);
  };

  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      password: e.currentTarget.value
    });
    setErrors(undefined);
  };

  const handleSubmit = () => {
    if (validation()) {
      onSubmit(formValue);
    }
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex
        w={{ md: '30%', base: '100%' }}
        h={{ md: 'auto', base: '100%' }}
        bgColor={{
          md: 'white',
          base: 'linear(to-r, gray.300, yellow.400, pink.200)'
        }}
        borderRadius={'10px'}
        padding={'40px 30px'}
        boxShadow={'2xl'}
        flexDirection={'column'}
        justifyContent={{ md: 'center', base: 'start' }}
      >
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          color={'primaryColor'}
          fontWeight={'bold'}
        >
          Đăng nhập
        </Text>
        <Text
          textAlign={'center'}
          fontSize={'md'}
          color={'red'}
          fontWeight={'semibold'}
        >
          {msgError}
        </Text>
        <InputText
          value={formValue.username}
          error={errors?.username?.message || ' '}
          text={'Tên đăng nhập'}
          placeholder={'Tên đăng nhập'}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleChangeUsername(e)
          }
        />
        <InputPassword
          error={errors?.password?.message || ' '}
          text={'Mật khẩu'}
          value={formValue.password}
          placeholder={'Mật khẩu'}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleChangePassword(e)
          }
        />
        <ButtonSolid
          text={'Đăng nhập'}
          onClick={() => handleSubmit()}
          size={'md'}
        />
      </Flex>
    </Flex>
  );
};

export default FormLogin;
