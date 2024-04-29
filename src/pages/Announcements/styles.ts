import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Announcement } from './index';

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

export const AnnouncementsList = styled(
  FlatList as new () => FlatList<Announcement>
)``;

export const AnnouncementContainer = styled.TouchableOpacity`
  margin: 8px 24px;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 8px;
`;

export const NameContainer = styled.View``;

export const UserName = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
  color: ${(props) => props.theme.colors.text};
`;

export const PostedAt = styled.Text`
  font-size: 14px;
  font-family: 'SourceSansPro-Light';
  color: ${(props) => props.theme.colors.darkerGreyText};
`;

export const Ministry = styled.Text`
  font-size: 18px;
  font-family: 'SourceSansPro-Bold';
  color: ${(props) => props.theme.colors.darkerGreyText};
`;

export const ContentContainer = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 16px;
  elevation: 8;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'SourceSansPro-BoldItalic';
  color: ${(props) => props.theme.colors.darkerGreyText};
`;

export const Content = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-Regular';
  color: ${(props) => props.theme.colors.text};
`;

export const AnnouncementDate = styled.Text``;
