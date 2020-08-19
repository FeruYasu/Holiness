import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0px 24px;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.headerBackground};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;
  elevation: 8;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'SourceSansPro-Bold';
  margin: 10px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const UserAvatar = styled.Image`
  width: 146px;
  height: 146px;
  border-radius: 73px;
  align-self: center;
`;

export const ChangePasswordText = styled.Text`
  color: ${(props) => props.theme.colors.accent};
  font-family: 'SourceSansPro-SemiBold';
`;

export const SwitchesContainer = styled.View`
  padding: 0 8px;
  margin-left: 3px;
  margin-top: 16px;
  width: 100%;
`;

export const DarkThemeContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
  margin-top: 4px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.greyText};
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
`;

export const NotificationTitle = styled.Text`
  color: ${(props) => props.theme.colors.greyText};
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
  margin-top: 24px;
`;

export const NotificationSeparator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const NotificationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Notification = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-Regular';
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  width: 200px;
  margin-bottom: 20px;
`;
