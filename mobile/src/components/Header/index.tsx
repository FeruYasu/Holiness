import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logonew.png';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  LeftContainer,
  BackButton,
  LogoImage,
  HeaderRightContainer,
  ProfileButton,
  ProfilePicture,
  Title,
} from './styles';

const Header: React.FC = ({ title, back }) => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <LeftContainer>
        {back && (
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="ios-chevron-back" size={30} color="#000" />
          </BackButton>
        )}
        {title ? (
          <Title>{title}</Title>
        ) : (
          <LogoImage source={logo} resizeMode="contain" />
        )}
      </LeftContainer>

      <HeaderRightContainer>
        <Icon
          name="notifications-outline"
          size={30}
          color="#858585"
          onPress={signOut}
        />
        <ProfileButton
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <ProfilePicture source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </HeaderRightContainer>
    </Container>
  );
};

export default Header;
