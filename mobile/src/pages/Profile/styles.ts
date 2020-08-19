import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 0px 24px;
  align-items: center;
`;

export const Header = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;
  elevation: 8;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #2825bf;
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
  color: #ff5656;
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
  border-bottom-color: #bdbdbd;
  margin-top: 4px;
`;

export const SubTitle = styled.Text`
  color: #939393;
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
`;

export const NotificationTitle = styled.Text`
  color: #939393;
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
  margin-top: 24px;
`;

export const NotificationSeparator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #bdbdbd;
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
  font-family: 'SourceSansPro-Regular';
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  width: 200px;
  margin-bottom: 20px;
`;
