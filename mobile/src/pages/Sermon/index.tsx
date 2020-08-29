import React, { useCallback } from 'react';

import Header from '../../components/Header';

import VideoPlayer from '../../components/VideoPlayer';

import { Container } from './styles';

const Sermon: React.FC = () => {
  return (
    <Container>
      <VideoPlayer />
    </Container>
  );
};

export default Sermon;
