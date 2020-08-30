import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MainTitle,
  SermonsList,
  SermonContainer,
  SermonPhoto,
  InfoContainer,
  Title,
  SermonDate,
} from './styles';

export interface Sermon {
  id: string;
  name: string;
  photoUrl: string;
}

const Sermons: React.FC = () => {
  const [sermons, setSermons] = useState();
  const { navigate } = useNavigation();

  return (
    <Container>
      <SermonsList
        ListHeaderComponent={
          <>
            <Header />
            <MainTitle>Pregações</MainTitle>
          </>
        }
        data={sermons}
        keyExtractor={(sermon) => sermon.id}
        renderItem={({ item: sermon }) => (
          <SermonContainer
            onPress={() => {
              navigate('Sermon', { data: sermon });
            }}
          >
            <SermonPhoto source={{ uri: sermon.photoUrl }} />
            <InfoContainer>
              <Title>{sermon.name}</Title>
              <SermonDate>Domingo as 18h</SermonDate>
            </InfoContainer>
          </SermonContainer>
        )}
      />
    </Container>
  );
};

export default Sermons;
