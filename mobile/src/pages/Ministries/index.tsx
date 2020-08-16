import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MainTitle,
  MinistriesList,
  MinistryContainer,
  MinistryPhoto,
  InfoContainer,
  Title,
  MinistryDate,
} from './styles';

export interface Ministry {
  id: string;
  name: string;
  photoUrl: string;
}

const Ministries: React.FC = () => {
  const [ministries, setMinistries] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('/ministries').then((response) => {
      setMinistries(response.data);
    });
  }, []);

  return (
    <Container>
      <MinistriesList
        ListHeaderComponent={(
          <>
            <Header />
            <MainTitle>Ministérios</MainTitle>
          </>
        )}
        data={ministries}
        keyExtractor={(ministry) => ministry.id}
        renderItem={({ item: ministry }) => (
          <MinistryContainer
            onPress={() => {
              navigate('Ministry', { data: ministry });
            }}
          >
            <MinistryPhoto source={{ uri: ministry.photoUrl }} />
            <InfoContainer>
              <Title>{ministry.name}</Title>
              <MinistryDate>Domingo as 18h</MinistryDate>
            </InfoContainer>
          </MinistryContainer>
        )}
      />
    </Container>
  );
};

export default Ministries;
