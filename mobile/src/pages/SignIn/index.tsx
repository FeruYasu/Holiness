/* eslint-disable prettier/prettier */
import React, { useRef, useCallback } from 'react';
import { TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';

import { BorderlessButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  FormContainer,
  LogoImage,
  GoogleButton,
  GoogleButtonText,
  ForgotText,
  OrText,
  SignInButton,
  ButtonsContainer,
  NewAccountContainer,
  NewAccountText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credencias.'
        );
      }
    },
    [signIn]
  );

  const handleForgot = useCallback(() => {
    console.log('esqueci')
  }, []);

  return (
    <Container>
      <FormContainer>
        <LogoImage source={logo} />

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
          />
          <Input
            ref={passwordInputRef}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            name="password"
            placeholder="Senha"
            inputRight={(
              <BorderlessButton onPress={handleForgot}>
                <ForgotText>Esqueceu?</ForgotText>
              </BorderlessButton>
            )}
          />
        </Form>

        <ButtonsContainer>
          <SignInButton
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Entrar
          </SignInButton>
          <OrText>ou</OrText>
          <GoogleButton>
            <Icon name="github" size={26} color="#fff" />
            <GoogleButtonText>Continuar com Google</GoogleButtonText>
          </GoogleButton>
        </ButtonsContainer>

        <NewAccountContainer>
          <NewAccountText>Não tem uma conta ainda?</NewAccountText>
          <CreateAccountButton
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
          </CreateAccountButton>
        </NewAccountContainer>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
