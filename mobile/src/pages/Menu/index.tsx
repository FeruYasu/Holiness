import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, ButtonsContainer, PageButton, PageName } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Header />

      <ButtonsContainer>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Ministérios</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Compartilhar</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Eventos</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Inscrições</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Enquetes</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Configurações</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Pregações</PageName>
        </PageButton>
        <PageButton>
          <Icon name="heart" size={20} color="#FFF" />
          <PageName>Avisos</PageName>
        </PageButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Menu;
