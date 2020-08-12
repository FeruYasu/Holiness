import React, { useRef } from 'react';
import { Image } from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Container, FormContainer } from './styles';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  return (
    <Container>
      <Image source={logo} />
      <FormContainer>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="Email"
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="Password"
          />

          <Button>Entrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
