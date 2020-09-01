import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { Event } from '../Events/index';
import { Announcement } from '../Announcements/index';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 22px;
  margin-top: 16px;
  font-family: 'SourceSansPro-Bold';
  margin-bottom: 16px;
`;

export const EventsList = styled(FlatList as new () => FlatList<Event>)`
  padding: 0 16px;
`;

export const EventContainer = styled.View`
  height: 150px;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.TouchableOpacity`
  position: relative;
  flex: 1;
  height: 150px;
  margin-right: 12px;
  width: 230px;
`;

export const EventImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  height: 150px;
  width: 230px;
  border-radius: 26px;
  margin-right: 12px;
`;

export const EventLayer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 150px;
  width: 100%;
  border-radius: 26px;
  background-color: 'rgba(0,0,0,0.5)';
`;

export const EventDate = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-SemiBold';
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'SourceSansPro-SemiBold';
  margin-top: 8px;
  margin-left: 16px;
`;

export const AnnouncementsList = styled(
  FlatList as new () => FlatList<Announcement>
)``;

export const AnnouncementContainer = styled.TouchableOpacity`
  margin: 8px 24px;
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
`;

export const ContentContainer = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 30px;
  padding: 16px;
  elevation: 8;
  margin-top: 10px;
`;

export const AnnouncementTitle = styled.Text`
  font-size: 18px;
  font-family: 'SourceSansPro-BoldItalic';
`;

export const Content = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-Regular';
`;

export const AnnouncementDate = styled.Text``;

export const SermonsList = styled(FlatList as new () => FlatList<Sermon>)``;

export const SermonContainer = styled.TouchableOpacity`
  height: 280px;
  margin-top: 24px;
`;

export const SermonPhoto = styled.Image`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PreacherPicture = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 50px;
  align-items: center;
  margin: 8px 0;
  margin-left: 16px;
`;

export const SermonTitle = styled.Text`
  font-size: 20px;
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
