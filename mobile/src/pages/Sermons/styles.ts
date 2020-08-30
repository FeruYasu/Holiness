import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Sermon } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 26px;
  margin-top: 16px;
  font-family: 'SourceSansPro-Bold';
`;

export const SermonsList = styled(FlatList as new () => FlatList<Sermon>)``;

export const SermonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.cardBackground};
  margin: 8px 24px;
  border-radius: 16px;
  height: 200px;
  elevation: 8;
`;

export const SermonPhoto = styled.Image`
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const InfoContainer = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-SemiBold';
`;

export const SermonDate = styled.Text`
  font-family: 'SourceSansPro-Regular';
  font-size: 16px;
  margin-right: 8px;
  color: ${(props) => props.theme.colors.text};
`;
