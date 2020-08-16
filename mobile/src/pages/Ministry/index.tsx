import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header';

import {
  Container,
  MinistryImage,
  Title,
  SubTitle,
  InfoContainer,
  Info,
  InfoText,
  Separator,
  LeadersContainer,
  Leader,
  Picture,
  Name,
} from './styles';

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
  const [ministry, SetMinistry] = useState<Ministry>({});

  useEffect(() => {
    console.log(data.ministries_leaders);
    data.ministries_leaders.map((item) => {
      console.log(item.leader.name);
    });
    SetMinistry(data);
  }, [data]);

  return (
    <Container>
      <Header />
      <MinistryImage source={{ uri: ministry.photoUrl }} />
      <Title>{ministry.name}</Title>
      <InfoContainer>
        <Info>
          <Icon name="map-outline" size={26} color="#808080" />
          <InfoText>{ministry.local}</InfoText>
        </Info>
        <Separator />
        <Info>
          <Icon name="calendar-outline" size={26} color="#808080" />
          <InfoText>Todos os domingos</InfoText>
        </Info>
        <Separator />
        <Info>
          <Icon name="time-outline" size={26} color="#808080" />
          <InfoText>09:00 até as 16:00</InfoText>
        </Info>
        <Separator />
      </InfoContainer>
      <SubTitle>Lideres</SubTitle>
      <LeadersContainer>
        {ministry &&
          data.ministries_leaders.map((item) => {
            return (
              <Leader key={item.leader.id}>
                <Picture source={{ uri: item.leader.avatar_url }} />
                <Name>{item.leader.name}</Name>
              </Leader>
            );
          })}
      </LeadersContainer>
    </Container>
  );
};

export default Ministry;
