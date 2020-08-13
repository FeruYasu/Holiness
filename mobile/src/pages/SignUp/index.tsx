import React, { useRef, useCallback } from 'react';
import { TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';

import Icon from 'react-native-vector-icons/Ionicons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  FormContainer,
  LogoImage,
  SignUpButton,
  ButtonsContainer,
  BackButton,
  BackButtonText,
} from './styles';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';

interface SignUpFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const { signIn } = useAuth();

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
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

  return (
    <Container>
      <FormContainer>
        <LogoImage source={logo} />

        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="name"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email"
            name="email"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Data de nascimento"
            name="birthday"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
            inputRight={(
              <BorderlessButton>
                <Icon name="calendar" size={26} color="#6360EB" />
              </BorderlessButton>
            )}
          />
          <Input
            ref={passwordInputRef}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha"
            name="password"
          />
          <Input
            ref={passwordInputRef}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Confirmar senha"
            name="confirmpassword"
          />
        </Form>

        <ButtonsContainer>
          <SignUpButton
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Criar conta
          </SignUpButton>
        </ButtonsContainer>

        <BackButton
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <BackButtonText>Já tenho uma conta</BackButtonText>
        </BackButton>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
