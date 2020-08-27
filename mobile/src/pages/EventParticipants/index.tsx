import React from 'react';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';

import { Container, SubTitle, ParticipantsContainer } from './styles';

import Participant from '../../components/Participant';

interface Participant {
  id: string;
  name: string;
  avatar_url: string;
}

interface Event {
  data: {
    name: string;
    photoUrl: string;
    participants: Participant[];
  };
}

const EventParticipants: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as Event;

  return (
    <Container>
      <Header title={data.name} back />

      <SubTitle>{data.participants.length} Participantes</SubTitle>

      <ParticipantsContainer>
        {data &&
          data.participants.map((item) => {
            return <Participant key={item.id} user={item} />;
          })}
      </ParticipantsContainer>
    </Container>
  );
};

export default EventParticipants;
