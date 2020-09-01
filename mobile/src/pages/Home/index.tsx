import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Header from '../../components/Header';

import {
  Container,
  MainTitle,
  EventsList,
  EventContainer,
  ImageContainer,
  EventLayer,
  EventImage,
  EventDate,
  Title,
  AnnouncementContainer,
  HeaderContainer,
  UserContainer,
  UserPhoto,
  NameContainer,
  UserName,
  PostedAt,
  Ministry,
  ContentContainer,
  AnnouncementTitle,
  Content,
  SermonsList,
  PreacherPicture,
  SermonContainer,
  TextContent,
  Description,
  SermonPhoto,
  InfoContainer,
  SermonTitle,
} from './styles';

const Home: React.FC = () => {
  const [events, setEvents] = useState();
  const [announcements, setAnnouncements] = useState();
  const [sermons, setSermons] = useState();

  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('events').then((response) => {
      setEvents(response.data);
    });

    api.get('announcements').then((response) => {
      setAnnouncements(response.data);
    });

    api.get('sermons').then((response) => {
      setSermons(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <MainTitle>Próximos Eventos</MainTitle>

      <EventContainer>
        <EventsList
          data={events}
          horizontal
          keyExtractor={(event) => event.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: event }) => (
            <ImageContainer
              onPress={() => {
                navigate('SingleEvent', { id: event.id });
              }}
            >
              <EventImage source={{ uri: event.photoUrl }} />
              <EventLayer />
              <Title>{event.name}</Title>
              <EventDate>{event.date}</EventDate>
            </ImageContainer>
          )}
        />
      </EventContainer>

      <MainTitle>Últimos Avisos</MainTitle>

      {announcements &&
        announcements.map((announcement) => {
          return (
            <AnnouncementContainer key={announcement.id}>
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
                <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                <Content>{announcement.content}</Content>
              </ContentContainer>
            </AnnouncementContainer>
          );
        })}

      {sermons &&
        sermons.map((sermon) => {
          return (
            <SermonContainer
              onPress={() => {
                navigate('SingleSermon', sermon);
              }}
              key={sermon.id}
            >
              <InfoContainer>
                <PreacherPicture source={{ uri: sermon.preacher.avatar_url }} />
                <TextContent>
                  <SermonTitle>{sermon.title}</SermonTitle>
                  <Description>{sermon.description}</Description>
                </TextContent>
              </InfoContainer>

              <SermonPhoto source={{ uri: sermon.photoUrl }} />
            </SermonContainer>
          );
        })}
    </Container>
  );
};

export default Home;
