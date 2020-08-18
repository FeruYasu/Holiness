import React, { useRef, useCallback, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Switch,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  SwitchesContainer,
  DarkThemeContainer,
  Separator,
  SubTitle,
  NotificationContainer,
  Notification,
} from './styles';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [theme, setTheme] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);

  const handleProfile = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, { abortEarly: false });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        Alert.alert('Perfil atualizado com sucesso!');

        navigation.goBack();
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
    [navigation]
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
      }
    );
  }, [user.id]);

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
        <Title>title</Title>
      </Header>
      <Container>
        <UserAvatarButton onPress={handleUpdateAvatar}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </UserAvatarButton>
        <Form ref={formRef}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="name"
            placeholder="Nome"
            returnKeyType="next"
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            returnKeyType="next"
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="password"
            placeholder="Senha"
            returnKeyType="next"
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="password"
            placeholder="Data de nascimento"
            returnKeyType="next"
          />
        </Form>
        <SwitchesContainer>
          <DarkThemeContainer>
            <SubTitle>Tema escuro</SubTitle>
            <Switch
              trackColor={{ false: '#312e38', true: '#767577' }}
              thumbColor="#ff9900"
              ios_backgroundColor="#3e3e3e"
            />
          </DarkThemeContainer>
          <Separator />
          <SubTitle>Notificações</SubTitle>
          <Separator />

          <NotificationContainer>
            <Notification>Avisos</Notification>
            <Switch
              trackColor={{ false: '#312e38', true: '#767577' }}
              thumbColor="#ff9900"
              ios_backgroundColor="#3e3e3e"
            />
          </NotificationContainer>
          <NotificationContainer>
            <Notification>Evento</Notification>
            <Switch
              trackColor={{ false: '#312e38', true: '#767577' }}
              thumbColor="#ff9900"
              ios_backgroundColor="#3e3e3e"
            />
          </NotificationContainer>
          <NotificationContainer>
            <Notification>Pregações</Notification>
            <Switch
              trackColor={{ false: '#312e38', true: '#767577' }}
              thumbColor="#ff9900"
              ios_backgroundColor="#3e3e3e"
            />
          </NotificationContainer>
        </SwitchesContainer>
      </Container>
    </>
  );
};

export default Profile;
