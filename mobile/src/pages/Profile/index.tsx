import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Platform, TextInput, Alert, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import { BorderlessButton } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

import { format, parseISO } from 'date-fns';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-picker';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  BackButton,
  Header,
  Title,
  UserAvatarButton,
  UserAvatar,
  ChangePasswordText,
  SwitchesContainer,
  DarkThemeContainer,
  Separator,
  SubTitle,
  NotificationTitle,
  NotificationSeparator,
  NotificationContainer,
  Notification,
  SubmitButton,
} from './styles';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';

interface ProfileFormData {
  name: string;
  email: string;
  birthdate: Date;
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [birthday, setBirthday] = useState('');

  const { updateUser } = useAuth();

  const [darktheme, setDarkTheme] = useState(false);
  const [preachNotification, setPreachNotification] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const birthdayInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  useEffect(() => {
    nameInputRef.current.filled();
    emailInputRef.current.filled();
    birthdayInputRef.current.filled();
    passwordInputRef.current.filled();

    setBirthday(format(parseISO(user.birthdate), 'dd/MM/yyyy'));
    setDate(parseISO(user.birthdate));
  }, [user.birthdate]);

  const showDatepicker = useCallback(() => {
    setShow(true);
  }, []);

  const onChange = (event, selectedDate): void => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setBirthday(format(currentDate, 'dd/MM/yyyy'));
    birthdayInputRef.current.filled();
  };

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }
        if (response.error) {
          Alert.alert('Erro ao atualizar seu avatar');
          return;
        }

        const data = new FormData();

        data.append('avatar', {
          type: 'image/jpeg',
          name: `${user.id}.jpg`,
          uri: response.uri,
        });

        api.patch('users/avatar', data).then((ApiResponse) => {
          updateUser(ApiResponse.data);
        });
      }
    );
  }, [user.id, updateUser]);

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          birthdate: Yup.string().required('Data de nascimento obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        const { name, email } = data;

        const formData = {
          name,
          email,
          birthdate: birthday,
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        Alert.alert('Perfil atualizado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.'
        );
      }
    },
    [birthday, updateUser]
  );

  return (
    <>
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="ios-chevron-back" size={30} color="#000" />
        </BackButton>
        <Title>Configurações</Title>
      </Header>
      <Container>
        <UserAvatarButton onPress={handleUpdateAvatar}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </UserAvatarButton>
        <Form initialData={user} ref={formRef} onSubmit={handleSubmit}>
          <Input
            ref={nameInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="name"
            placeholder="Nome"
            returnKeyType="next"
          />
          <Input
            ref={emailInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            returnKeyType="next"
          />
          <Input
            ref={birthdayInputRef}
            name="birthdate"
            placeholder="Data de nascimento"
            value={birthday}
            editable={false}
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
            keyboardType="email-address"
            name="password"
            placeholder="Senha"
            value="************"
            editable={false}
            inputRight={
              <BorderlessButton onPress={showDatepicker}>
                <ChangePasswordText>alterar senha</ChangePasswordText>
              </BorderlessButton>
            }
          />
        </Form>
        <SwitchesContainer>
          <DarkThemeContainer>
            <SubTitle>TEMA NOTURNO</SubTitle>
            <Switch
              trackColor={{ false: '#928C8C', true: '#FF8484' }}
              thumbTintColor="#BF2525"
              thumbColor={darktheme === false ? '#404040' : '#BF2525'}
              ios_backgroundColor="#FF8484"
              value={darktheme}
            />
          </DarkThemeContainer>
          <Separator />

          <NotificationTitle>NOTIFICAÇÕES</NotificationTitle>
          <NotificationSeparator />

          <NotificationContainer>
            <Notification>Avisos</Notification>
            <Switch
              trackColor={{ false: '#928C8C', true: '#FF8484' }}
              thumbTintColor="#BF2525"
              thumbColor={preachNotification === false ? '#404040' : '#BF2525'}
              ios_backgroundColor="#FF8484"
              value={preachNotification}
            />
          </NotificationContainer>
          <NotificationContainer>
            <Notification>Evento</Notification>
            <Switch
              trackColor={{ false: '#928C8C', true: '#FF8484' }}
              thumbTintColor="#BF2525"
              thumbColor={preachNotification === false ? '#404040' : '#BF2525'}
              ios_backgroundColor="#FF8484"
              value={preachNotification}
            />
          </NotificationContainer>
          <NotificationContainer>
            <Notification>Pregações</Notification>
            <Switch
              trackColor={{ false: '#928C8C', true: '#FF8484' }}
              thumbTintColor="#BF2525"
              thumbColor={preachNotification === false ? '#404040' : '#BF2525'}
              ios_backgroundColor="#FF8484"
              value={preachNotification}
            />
          </NotificationContainer>
        </SwitchesContainer>
        <SubmitButton onPress={() => formRef.current?.submitForm()}>
          Salvar
        </SubmitButton>
      </Container>
    </>
  );
};

export default Profile;
