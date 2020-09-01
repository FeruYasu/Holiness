import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MainTitle,
  SermonsList,
  PreacherPicture,
  SermonContainer,
  TextContent,
  Description,
  SermonPhoto,
  InfoContainer,
  Title,
} from './styles';

export interface Sermon {
  id: string;
  photoUrl: string;
  preacher: {
    avatar_url: string;
  };
  title: string;
  description: string;
}

const Sermons: React.FC = () => {
  const [sermons, setSermons] = useState<Sermon[]>();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('sermons').then((response) => {
      setSermons(response.data);
    });
  }, []);

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
            <InfoContainer>
              <PreacherPicture source={{ uri: sermon.preacher.avatar_url }} />
              <TextContent>
                <Title>{sermon.title}</Title>
                <Description>{sermon.description}</Description>
              </TextContent>
            </InfoContainer>

            <SermonPhoto source={{ uri: sermon.photoUrl }} />
          </SermonContainer>
        )}
      />
    </Container>
  );
};

export default Sermons;
