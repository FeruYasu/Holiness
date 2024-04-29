import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import YouTube from 'react-native-youtube';

import { YOUTUBE_API_KEY } from '@env';

import Icon from 'react-native-vector-icons/Feather';
import { Sermon } from '../Sermons';
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
      <YouTube
        apiKey={YOUTUBE_API_KEY}
        videoId={sermon.video_url}
        play
        loop
        style={{ alignSelf: 'stretch', height: 300 }}
      />
      <VideoHeaderContainer>
        <HeaderTopContent>
          <VideoTitle>{sermon.title} </VideoTitle>
          {/* <Icon name="heart" size={26} color={theme.colors.text} />
          <Icon name="share-2" size={26} color={theme.colors.text} /> */}
        </HeaderTopContent>
        <OwnerName>Pregação: {sermon.preacher.name} </OwnerName>
        {/*
        <VideoDescription>{sermon.description}</VideoDescription> */}

        <VideoSocialActionsContainer />
      </VideoHeaderContainer>
      <Comments sermonId={sermon.id} />
    </Container>
  );
};

export default SingleSermon;
