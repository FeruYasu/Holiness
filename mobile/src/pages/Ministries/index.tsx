import React, { useEffect, useState } from 'react';

import api from '../../services/api';

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

  useEffect(() => {
    api.get('/ministries').then((response) => {
      setMinistries(response.data);
    });
  }, []);

  return (
    <Container>
      <MainTitle>Ministérios</MainTitle>
      <MinistriesList
        data={ministries}
        keyExtractor={(ministry) => ministry.id}
        renderItem={({ item: ministry }) => (
          <MinistryContainer>
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
