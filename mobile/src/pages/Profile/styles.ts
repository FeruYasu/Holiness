import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 24px ${Platform.OS === 'android' ? 20 : 40}px;
  position: relative;
  background-color: #f9f9f9;
`;

export const Header = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  margin: 20px 0;
  align-self: flex-start;
`;

export const BackButton = styled.TouchableOpacity``;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const UserAvatar = styled.Image`
  width: 168px;
  height: 168px;
  border-radius: 84px;
  align-self: center;
`;

export const SwitchesContainer = styled.View`
  padding: 0 8px;
`;

export const DarkThemeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #bdbdbd;
  margin-left: 14px;
  margin-right: 14px;
`;

export const SubTitle = styled.Text`
  color: #939393;
  font-size: 14px;
  font-weight: bold;
`;

export const NotificationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Notification = styled.Text``;
