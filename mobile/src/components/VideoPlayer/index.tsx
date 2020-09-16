import React, { useCallback, useState, useRef, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  VideoContainer,
  VideoContent,
  VideoBar,
  PlayButton,
  Duration,
} from './styles';

import { useAuth } from '../../hooks/auth';

interface VideoProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoProps> = ({ videoUrl }) => {
  const [error, setError] = useState('');
  const [pause, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const { theme } = useAuth();
  const [videoInfo, setVideoInfo] = useState();

  const handleError = useCallback((data) => {
    const {
      error: { code },
    } = data;
    let errorMessage = 'Ocorreu um erro para reproduzir o video';

    if (code === '-11800') {
      errorMessage = 'Não foi possivel carregar o video da URL';
    }

    setError(errorMessage);
  }, []);

  const handlePlay = useCallback(() => {
    setPause(!pause);

    // videoRef.current?.presentFullscreenPlayer();
  }, [pause]);

  const handleProgress = useCallback(
    (data) => {
      setProgress(data.currentTime / duration);
    },
    [duration]
  );

  const handleLoad = useCallback((data) => {
    const timeInSeconds = data.duration;
    const seconds = Math.floor(timeInSeconds);

    setDuration(seconds);
  }, []);

  return (
    <Container>
      <VideoContainer>
        <VideoContent
          source={{
            uri: videoUrl,
          }}
          paused={pause}
          resizeMode="contain"
          onError={handleError}
          onLoad={handleLoad}
          onProgress={handleProgress}
          ref={videoRef}
        />
        <PlayButton onPress={handlePlay}>
          {pause ? (
            <Icon name="play" size={45} color="#fff" />
          ) : (
            <Icon name="pause" size={45} color="#fff" />
          )}
        </PlayButton>
        <VideoBar progress={progress} color={theme.colors.accent} />
        {/*
        <Duration>{duration}</Duration> */}
      </VideoContainer>

      {/* <FullscreenButton onPress={fullScreen}>
        <FullscreenButtonText>FullScreen</FullscreenButtonText>
      </FullscreenButton> */}
    </Container>
  );
};

export default VideoPlayer;
