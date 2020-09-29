import React, { useRef, useCallback, useState } from 'react';
import { TextInput, Alert, Platform } from 'react-native';
import { Form } from '@unform/mobile';

import { format } from 'date-fns';

import Icon from 'react-native-vector-icons/Feather';
import { BorderlessButton } from 'react-native-gesture-handler';

import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
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
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const birthdayInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const [date, setDate] = useState(new Date(1598051730000));
  const [birthday, setBirthday] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate): void => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setBirthday(format(date, 'dd/MM/yyyy'));
    birthdayInputRef.current.value(format(date, 'dd/MM/yyyy'));
    birthdayInputRef.current.filled();
    passwordInputRef.current.focus();
  };

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          birthday: Yup.string().required('Data obrigatória'),
          password: Yup.string().required('Senha obrigatória'),
          confirmpassword: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'As senhas não são iguais'
          ),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', {
          name: data.name,
          email: data.email,
          birthdate: data.birthday,
          password: data.password,
        });

        Alert.alert('Usuário criado com sucesso');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na criação de usuário ',
          'Ocorreu um erro ao criar seu usuário.'
        );
      }
    },
    [navigation]
  );

  const showDatepicker = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <Container>
      <FormContainer>
        <LogoImage source={logo} />

        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCorrect={false}
            autoCapitalize="words"
            name="name"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current.focus();
            }}
          />
          <Input
            ref={emailInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email"
            name="email"
            returnKeyType="next"
            onSubmitEditing={() => {
              showDatepicker();
            }}
          />
          <Input
            ref={birthdayInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Data de nascimento"
            name="birthday"
            value={birthday}
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
            inputRight={
              <BorderlessButton onPress={showDatepicker}>
                <Icon name="calendar" size={26} color="#6360EB" />
              </BorderlessButton>
            }
          />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour
              display="default"
              onChange={onChange}
            />
          )}

          <Input
            ref={passwordInputRef}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha"
            name="password"
            onSubmitEditing={() => {
              confirmPasswordInputRef.current.focus();
            }}
          />
          <Input
            ref={confirmPasswordInputRef}
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
