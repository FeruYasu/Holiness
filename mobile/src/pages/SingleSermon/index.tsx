import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import { Sermon } from '../Sermons';
import VideoPlayer from '../../components/VideoPlayer';
import Comments from '../../components/Comments';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  VideoHeaderContainer,
  HeaderTopContent,
  VideoTitle,
  VideoDescription,
  OwnerName,
  VideoSocialActionsContainer,
} from './styles';

const SingleSermon: React.FC = () => {
  const route = useRoute();
  const sermon = route.params as Sermon;
  const { theme } = useAuth();

  return (
    <Container>
      <VideoPlayer videoUrl={sermon.video_url} />
      <VideoHeaderContainer>
        <HeaderTopContent>
          <VideoTitle>{sermon.title} </VideoTitle>
          <Icon name="heart" size={26} color={theme.colors.text} />
          <Icon name="share-2" size={26} color={theme.colors.text} />
        </HeaderTopContent>
        <OwnerName>Pregação: </OwnerName>

        <VideoDescription>{sermon.description}</VideoDescription>

        <VideoSocialActionsContainer />
      </VideoHeaderContainer>
      <Comments sermonId={sermon.id} />
    </Container>
  );
};

export default SingleSermon;
