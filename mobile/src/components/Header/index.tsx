import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import logo from '../../assets/logonew.png';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  LogoImage,
  HeaderRightContainer,
  ProfilePicture,
} from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <LogoImage source={logo} resizeMode="contain" />
      <HeaderRightContainer>
        <Icon
          name="notifications-outline"
          size={30}
          color="#858585"
          onPress={signOut}
        />
        <ProfilePicture source={{ uri: user.avatar_url }} />
      </HeaderRightContainer>
    </Container>
  );
};

export default Header;
