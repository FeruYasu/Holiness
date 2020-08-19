import React, { useEffect, useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import Header from '../../components/Header';

import {
  Container,
  MinistryImage,
  ContentContainer,
  SubTitle,
  InfoContainer,
  Info,
  InfoText,
  Separator,
  LeadersContainer,
  Leader,
  Picture,
  Name,
  Description,
  MembersTitle,
  MembersContainer,
  Member,
  AcceptContainer,
  AcceptTitle,
  AcceptDescription,
  ConfirmButton,
  ConfirmButtonText,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface Leader {
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
    ministries_leaders: Leader[];
  };
}

const Ministry: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as Ministry;
  const { theme } = useAuth();

  const { navigate } = useNavigation();

  const handleParticipants = useCallback(() => {
    navigate('Participants', { data });
  }, []);

  return (
    <Container>
      <Header title={data.name} back />
      <MinistryImage source={{ uri: data.photoUrl }} />

      <ContentContainer>
        <InfoContainer>
          <Info>
            <Icon
              name="map-outline"
              size={26}
              color={theme.colors.darkerGreyText}
            />
            <InfoText>{data.local}</InfoText>
          </Info>
          <Separator />
          <Info>
            <Icon
              name="calendar-outline"
              size={26}
              color={theme.colors.darkerGreyText}
            />
            <InfoText>Todos os domingos</InfoText>
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

        <SubTitle>Lideres</SubTitle>
        <LeadersContainer>
          {data &&
            data.ministries_leaders.map((item) => {
              return (
                <Leader key={item.leader.id}>
                  <Picture source={{ uri: item.leader.avatar_url }} />
                  <Name>{item.leader.name}</Name>
                </Leader>
              );
            })}
        </LeadersContainer>
        <SubTitle>Sobre o ministério</SubTitle>
        <Description>{data.description}</Description>
        <MembersTitle>
          {data.ministries_members.length} Participantes
        </MembersTitle>
        <TouchableOpacity onPress={handleParticipants}>
          <MembersContainer>
            {data &&
              data.ministries_members.map((item) => {
                return (
                  <Member key={item.member.id}>
                    <Picture source={{ uri: item.member.avatar_url }} />
                  </Member>
                );
              })}
          </MembersContainer>
        </TouchableOpacity>

        <AcceptTitle>Gostaria de fazer parte desse ministério?</AcceptTitle>

        <AcceptContainer>
          <AcceptDescription>
            Clique em participar e o líder irá entrar em contato.
          </AcceptDescription>
          <ConfirmButton>
            <ConfirmButtonText>Participar</ConfirmButtonText>
          </ConfirmButton>
        </AcceptContainer>
      </ContentContainer>
    </Container>
  );
};

export default Ministry;
