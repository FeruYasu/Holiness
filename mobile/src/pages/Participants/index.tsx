import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import {
  Container,
  SubTitle,
  Separator,
  ParticipantsContainer,
  Participant,
  Picture,
  Name,
} from './styles';

interface Participant {
  leader: {
    id: string;
    name: string;
    avatar_url: string;
  };
}

interface Ministry {
  data: {
    name: string;
    photoUrl: string;
    ministries_leaders: Participant[];
  };
}

const Participants: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as Ministry;

  const { navigate } = useNavigation();

  return (
    <Container>
      <Header title={data.name} back />
      <SubTitle>Lideres</SubTitle>

      <ParticipantsContainer>
        {data &&
          data.ministries_leaders.map((item) => {
            return (
              <>
                <Participant key={item.leader.id}>
                  <Picture source={{ uri: item.leader.avatar_url }} />
                  <Name>{item.leader.name}</Name>
                </Participant>
                <Separator />
              </>
            );
          })}
      </ParticipantsContainer>

      <SubTitle>{data.ministries_members.length} Participantes</SubTitle>

      <ParticipantsContainer>
        {data &&
          data.ministries_members.map((item) => {
            return (
              <>
                <Participant key={item.member.id}>
                  <Picture source={{ uri: item.member.avatar_url }} />
                  <Name>{item.member.name}</Name>
                </Participant>
                <Separator />
              </>
            );
          })}
      </ParticipantsContainer>
    </Container>
  );
};

export default Participants;
