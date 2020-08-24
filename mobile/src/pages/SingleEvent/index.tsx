import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

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
import { useAuth } from '../../hooks/auth';

interface Ministry {
  name: string;
}

interface User {
  id: string;
  name: string;
  avatar_url: string;
}

interface Event {
  data: {
    name: string;
    description: string;
    photoUrl: string;
    local: string;
    start_date: Date;
    end_date: Date;
    ministries: Ministry[];
    participants: User[];
  };
}

const SingleEvent: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as Event;
  const { theme } = useAuth();
  const [event, setEvent] = useState<Event>({});

  const { navigate } = useNavigation();

  useEffect(() => {
    setEvent(data);
  }, [data]);

  const handleParticipants = useCallback(() => {
    navigate('Participants', { data });
  }, [data, navigate]);

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
            <Icon
              name="map-outline"
              size={26}
              color={theme.colors.darkerGreyText}
            />
            <InfoText>{event.local}</InfoText>
          </Info>
          <Separator />
          <Info>
            <Icon
              name="calendar-outline"
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
            <Icon
              name="time-outline"
              size={26}
              color={theme.colors.darkerGreyText}
            />
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
          {event && event.participants?.length} Participantes
        </ParticipantsTitle>
        <TouchableOpacity onPress={handleParticipants}>
          <ParticipantsContainer>
            {data &&
              data.participants.map((participant) => {
                return (
                  <Participant key={participant.id}>
                    <Picture source={{ uri: participant.avatar_url }} />
                  </Participant>
                );
              })}
          </ParticipantsContainer>
        </TouchableOpacity>

        <ButtonsContainer>
          <CantGoButton>
            <CantGoButtonText>Não participarei</CantGoButtonText>
          </CantGoButton>
          <ConfirmButton>
            <ConfirmButtonText>Participar</ConfirmButtonText>
          </ConfirmButton>
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
};

export default SingleEvent;
