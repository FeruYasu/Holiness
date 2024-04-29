import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
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
  ProfileInitialsContainer,
  ProfileInitialsText,
  Title,
} from './styles';

const Header: React.FC = ({ title, back }) => {
  const { theme, user, signOut } = useAuth();
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
            <Icon
              name="chevron-left"
              size={30}
              color={theme.colors.darkerGreyText}
            />
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
          name="bell"
          size={30}
          color={theme.colors.darkerGreyText}
          onPress={signOut}
        />
        <ProfileButton
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          {user.avatar_url ? (
            <ProfilePicture source={{ uri: user.avatar_url }} />
          ) : (
            <ProfileInitialsContainer
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              <ProfileInitialsText>{user.initials}</ProfileInitialsText>
            </ProfileInitialsContainer>
          )}
        </ProfileButton>
      </HeaderRightContainer>
    </Container>
  );
};

export default Header;
