import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  ImageContainer,
  MinistryImage,
  DateHeader,
  DayHeaderText,
  MonthHeaderText,
  MainTitle,
  ContentContainer,
  SubTitle,
  InfoContainer,
  Info,
  DateInfo,
  DateText,
  InfoText,
  Separator,
  MinistriesContainer,
  Description,
  ParticipantsTitle,
  ParticipantsContainer,
  Participant,
  Picture,
  ButtonsContainer,
  CantGoButton,
  CantGoButtonText,
  ConfirmButton,
  ConfirmButtonText,
} from './styles';

interface Ministry {
  name: string;
}

interface User {
  id: string;
  name: string;
  avatar_url: string;
}

interface Event {
  id: string;
  photoUrl: string;
}

interface EventId {
  id: string;
}

const SingleEvent: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as EventId;
  const { theme, user } = useAuth();
  const [event, setEvent] = useState<Event>({});
  const [alredyParticipant, setAlredyParticipant] = useState(false);
  const [participants, setParticipants] = useState<User[]>(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    api.get(`/events/${id}`).then((response) => {
      setEvent(response.data);

      setParticipants(response.data.participants);
      response.data.participants.forEach((participant) => {
        if (participant.id === user.id) {
          setAlredyParticipant(true);
        }
      });
    });
  }, [id, user.id]);

  const handleParticipants = useCallback(() => {
    navigate('EventParticipants', { data: event });
  }, [event, navigate]);

  const confirmParticipation = useCallback(() => {
    api
      .post('events/participants', {
        eventId: event.id,
        usersIds: [user.id],
      })
      .then((response) => {
        setEvent(response.data);
        setParticipants(response.data.participants);
        setAlredyParticipant(true);
      });
  }, [event.id, user.id]);

  const cancelParticipation = useCallback(() => {
    api
      .delete('events/participants', {
        data: { eventId: event.id, usersIds: [user.id] },
      })
      .then((response) => {
        setEvent(response.data);
        setParticipants(response.data.participants);
        setAlredyParticipant(false);
      });
  }, [event.id, user.id]);

  return (
    <Container>
      <Header title="Evento" back />
      <ImageContainer>
        <MinistryImage source={{ uri: event.photoUrl }} />
        <DateHeader>
          <DayHeaderText>11</DayHeaderText>
          <MonthHeaderText>02.2020</MonthHeaderText>
        </DateHeader>
      </ImageContainer>
      <MainTitle>{event.name}</MainTitle>

      <ContentContainer>
        <InfoContainer>
          <Info>
            <Icon name="map" size={26} color={theme.colors.darkerGreyText} />
            <InfoText>{event.local}</InfoText>
          </Info>
          <Separator />
          <Info>
            <Icon
              name="calendar"
              size={26}
              color={theme.colors.darkerGreyText}
            />
            <DateInfo>
              <DateText>Início: {event.start_date}</DateText>
              <DateText>Término: {event.end_date}</DateText>
            </DateInfo>
          </Info>
          <Separator />
          <Info>
            <Icon name="clock" size={26} color={theme.colors.darkerGreyText} />
            <InfoText>09:00 até as 16:00</InfoText>
          </Info>
          <Separator />
        </InfoContainer>

        <MinistriesContainer>
          <SubTitle>Ministérios participantes: </SubTitle>
          {event.ministries?.map((ministry) => {
            return (
              <Description key={ministry.name}>{ministry.name}</Description>
            );
          })}
        </MinistriesContainer>

        <SubTitle>Sobre o evento</SubTitle>
        <Description>{event.description}</Description>
        <ParticipantsTitle>
          {participants && participants.length} Participantes
        </ParticipantsTitle>
        <TouchableOpacity onPress={handleParticipants}>
          <ParticipantsContainer>
            {participants &&
              participants.map((participant) => {
                return (
                  <Participant key={participant.id}>
                    <Picture source={{ uri: participant.avatar_url }} />
                  </Participant>
                );
              })}
          </ParticipantsContainer>
        </TouchableOpacity>

        <ButtonsContainer>
          {alredyParticipant ? (
            <CantGoButton onPress={cancelParticipation}>
              <CantGoButtonText>Cancelar participação</CantGoButtonText>
            </CantGoButton>
          ) : (
            <>
              <CantGoButton>
                <CantGoButtonText>Não participarei</CantGoButtonText>
              </CantGoButton>
              <ConfirmButton onPress={confirmParticipation}>
                <ConfirmButtonText>Participar</ConfirmButtonText>
              </ConfirmButton>
            </>
          )}
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
};

export default SingleEvent;
