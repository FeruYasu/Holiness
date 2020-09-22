import React, { useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

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

interface User {
  id: string;
  name: string;
  avatar_url: string;
}

interface Ministry {
  data: {
    name: string;
    description: string;
    photoUrl: string;
    local: string;
    leaders: User[];
    members: User[];
  };
}

const Ministry: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as Ministry;
  const { theme } = useAuth();

  const { navigate } = useNavigation();

  const handleParticipants = useCallback(() => {
    navigate('Participants', { data });
  }, [data, navigate]);

  return (
    <Container>
      <Header title={data.name} back />
      <MinistryImage source={{ uri: data.photoUrl }} />

      <ContentContainer>
        <InfoContainer>
          <Info>
            <Icon name="map" size={26} color={theme.colors.darkerGreyText} />
            <InfoText>{data.local}</InfoText>
          </Info>
          <Separator />
          <Info>
            <Icon
              name="calendar"
              size={26}
              color={theme.colors.darkerGreyText}
            />
            <InfoText>Todos os domingos</InfoText>
          </Info>
          <Separator />
          <Info>
            <Icon name="clock" size={26} color={theme.colors.darkerGreyText} />
            <InfoText>09:00 até as 16:00</InfoText>
          </Info>
          <Separator />
        </InfoContainer>

        <SubTitle>Lideres</SubTitle>
        <LeadersContainer>
          {data &&
            data.leaders.map((leader) => {
              return (
                <Leader key={leader.id}>
                  <Picture source={{ uri: leader.avatar_url }} />
                  <Name>{leader.name}</Name>
                </Leader>
              );
            })}
        </LeadersContainer>
        <SubTitle>Sobre o ministério</SubTitle>
        <Description>{data.description}</Description>
        <MembersTitle>{data.members.length} Participantes</MembersTitle>
        <TouchableOpacity onPress={handleParticipants}>
          <MembersContainer>
            {data &&
              data.members.map((member) => {
                return (
                  <Member key={member.id}>
                    <Picture source={{ uri: member.avatar_url }} />
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
