import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Sermon } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 16px;
  margin-top: 16px;
  font-family: 'SourceSansPro-Bold';
`;

export const SermonsList = styled(FlatList as new () => FlatList<Sermon>)``;

export const SermonContainer = styled.TouchableOpacity`
  flex: 1;
`;

export const SermonPhoto = styled.Image`
  background-color: rgba(0, 0, 0, 0.4);
  aspect-ratio: 1;
`;

export const PreacherPicture = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const InfoContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  height: 50px;
  align-items: center;
  margin: 8px 0;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-SemiBold';
`;

export const TextContent = styled.View`
  flex-direction: column;
  margin-left: 16px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-SemiBold';
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  margin: 14px;
`;

export const Tag = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.tabBorder};
  margin-right: 16px;
  border-radius: 18px;
  padding: 6px;
`;

export const TagText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-SemiBold';
`;
