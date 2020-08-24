import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { getDate, parseISO } from 'date-fns';

import {
  Container,
  DateContainer,
  InitialDate,
  FinalDate,
  EventsList,
  MainTitle,
  EventContainer,
  ImageContainer,
  EventLayer,
  EventImage,
  EventDate,
  Title,
} from './styles';
import api from '../../services/api';
import Header from '../../components/Header';

export interface Event {
  id: string;
  name: string;
  photoUrl: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('events').then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <MainTitle>Eventos</MainTitle>

      <EventsList
        data={events}
        keyExtractor={(event) => event.id}
        renderItem={({ item: event }) => (
          <EventContainer>
            <DateContainer>
              <InitialDate>{getDate(parseISO(event.start_date))}</InitialDate>
              <FinalDate>{getDate(parseISO(event.end_date))}</FinalDate>
            </DateContainer>
            <ImageContainer
              onPress={() => {
                navigate('SingleEvent', { data: event });
                console.log('clicked');
              }}
            >
              <EventImage source={{ uri: event.photoUrl }} />
              <EventLayer />
              <Title>{event.name}</Title>
              <EventDate>{event.date}</EventDate>
            </ImageContainer>
          </EventContainer>
        )}
      />
    </Container>
  );
};

export default Events;
