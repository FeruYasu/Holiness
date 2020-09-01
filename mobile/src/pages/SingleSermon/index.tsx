import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Container } from './styles';
import { Sermon } from '../Sermons';

import VideoPlayer from '../../components/VideoPlayer';

const SingleSermon: React.FC = () => {
  const route = useRoute();
  const sermon = route.params as Sermon;

  return (
    <Container>
      <VideoPlayer
        videoUrl={sermon.video_url}
        title={sermon.title}
        description={sermon.description}
      />
    </Container>
  );
};

export default SingleSermon;
