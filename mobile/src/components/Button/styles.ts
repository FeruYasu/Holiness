import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  height: 46px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  background: #6360eb;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
