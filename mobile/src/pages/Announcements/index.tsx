import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MainTitle,
  AnnouncementsList,
  AnnouncementContainer,
  HeaderContainer,
  UserContainer,
  UserPhoto,
  NameContainer,
  UserName,
  PostedAt,
  Ministry,
  ContentContainer,
  Title,
  Content,
} from './styles';

export interface Announcement {
  id: string;
  title: string;
  photoUrl: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('announcements').then((response) => {
      setAnnouncements(response.data);
    });
  }, []);

  return (
    <Container>
      <AnnouncementsList
        ListHeaderComponent={
          <>
            <Header />
            <MainTitle>Avisos</MainTitle>
          </>
        }
        data={announcements}
        keyExtractor={(announcement) => announcement.id}
        renderItem={({ item: announcement }) => (
          <AnnouncementContainer>
            <HeaderContainer>
              <UserContainer>
                <UserPhoto source={{ uri: announcement.user.avatar_url }} />
                <NameContainer>
                  <UserName>{announcement.user.name}</UserName>
                  <PostedAt>às 14h:15 do dia 05/06/2020</PostedAt>
                </NameContainer>
              </UserContainer>
              <Ministry>Minarai</Ministry>
            </HeaderContainer>
            <ContentContainer>
              <Title>{announcement.title}</Title>
              <Content>{announcement.content}</Content>
            </ContentContainer>
          </AnnouncementContainer>
        )}
      />
    </Container>
  );
};

export default Announcements;
