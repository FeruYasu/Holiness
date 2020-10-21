import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  justify-content: space-evenly;
`;

export const FormContainer = styled.View`
  margin: 25px;
  width: 100%;
  padding: 0 30px;
`;

export const LogoImage = styled.Image`
  margin: auto;
  margin-top: 50px;
  width: 100%;
  margin-bottom: 40px;
`;

export const ForgotText = styled.Text`
  font-size: 14px;
  color: red;
`;

export const ButtonsContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignInButton = styled(Button)`
  margin-top: 36px;
  width: 100%;
  margin-bottom: 12px;
  elevation: 8;
`;

export const OrText = styled.Text`
  font-size: 12px;
`;

export const GoogleLogo = styled.Image``;

export const GoogleButton = styled(BaseButton)`
  height: 46px;
  border-radius: 21px;
  background-color: #bf2525;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 12px;
  elevation: 8;
`;

export const GoogleButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-left: 20px;
`;

export const NewAccountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
  margin-top: 24px;
`;

export const NewAccountText = styled.Text`
  font-size: 16px;
  color: #434343;
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountButtonText = styled.Text`
  font-size: 16px;
  color: #bf2525;
`;
