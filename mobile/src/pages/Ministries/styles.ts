import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Ministry } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: #bf2525;
  margin: 0 20px;
  margin-top: 56px;
  font-weight: bold;
`;

export const MinistriesList = styled(
  FlatList as new () => FlatList<Ministry>
)``;

export const MinistryContainer = styled.View`
  background-color: #fff;
  margin: 20px;
  border-radius: 16px;
  height: 200px;
  elevation: 8;
`;

export const MinistryPhoto = styled.Image`
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const InfoContainer = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const MinistryDate = styled.Text``;
