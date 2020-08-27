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

interface Ministry {
  data: {
    name: string;
    photoUrl: string;
    leaders: Participant[];
    members: Participant[];
  };
}

const Participants: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as Ministry;

  return (
    <Container>
      <Header title={data.name} back />
      <SubTitle>Lideres</SubTitle>

      <ParticipantsContainer>
        {data &&
          data.leaders.map((item) => {
            return <Participant key={item.id} data={item} />;
          })}
      </ParticipantsContainer>

      <SubTitle>{data.members.length} Participantes</SubTitle>

      <ParticipantsContainer>
        {data &&
          data.members.map((item) => {
            return <Participant key={item.id} data={item} />;
          })}
      </ParticipantsContainer>
    </Container>
  );
};

export default Participants;
