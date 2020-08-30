import React, { useCallback, useState, useRef } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  VideoContainer,
  VideoHeaderContainer,
  HeaderTopContent,
  VideoTitle,
  VideoDescription,
  OwnerContainer,
  OwnerPicture,
  OwnerName,
  VideoContent,
  VideoBar,
  PlayButton,
  VideoSocialActionsContainer,
  CommentsContainer,
  Comment,
  CommentsList,
  ContentContainer,
  TopContent,
  CommentName,
  CommentContent,
  CommentActions,
  LikesCounter,
  AnswerActions,
  CommentAnswer,
  CommentPicture,
  Duration,
} from './styles';

import { useAuth } from '../../hooks/auth';

const VideoPlayer: React.FC = () => {
  const [error, setError] = useState('');
  const [pause, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<Video>(null);
  const { user, theme } = useAuth();

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
            uri: 'http://techslides.com/demos/sample-videos/small.mp4',
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

      <VideoHeaderContainer>
        <HeaderTopContent>
          <VideoTitle>Culto Dominical 12/09/2020 </VideoTitle>
          <Icon name="heart-outline" size={26} color="#000" />
          <Icon name="share-social-outline" size={26} color="#000" />
        </HeaderTopContent>
        <OwnerName>Pregação: Pr. Rogério Arabori</OwnerName>

        <VideoDescription>
          Série reconstruindo os muros parte 3
        </VideoDescription>

        <VideoSocialActionsContainer />
      </VideoHeaderContainer>

      <CommentsList>
        <CommentsContainer>
          <Comment>
            <OwnerPicture source={{ uri: user.avatar_url }} />
            <ContentContainer>
              <TopContent>
                <CommentContent>
                  <CommentName>Fernando Yasumoto</CommentName> Que palavra
                  abençoada! Fui muito tocado por essa palavra do Pastor
                  Arabori!Fui muito tocado por essa palavra do Pastor Arabori!
                </CommentContent>
              </TopContent>
              <CommentActions>
                <LikesCounter>1 curtida</LikesCounter>
                <AnswerActions>responder</AnswerActions>
              </CommentActions>
            </ContentContainer>
            <Icon name="thumbs-up-outline" size={20} />
          </Comment>
          <CommentAnswer>
            <CommentPicture source={{ uri: user.avatar_url }} />
            <ContentContainer>
              <TopContent>
                <CommentContent>
                  <CommentName>Fernando Yasumoto</CommentName> Que palavra
                  abençoada! Fui muito tocado por essa palavra do Pastor
                  Arabori!Fui muito tocado por essa palavra do Pastor Arabori!
                </CommentContent>
              </TopContent>
              <CommentActions>
                <LikesCounter>1 curtida</LikesCounter>
                <AnswerActions>responder</AnswerActions>
              </CommentActions>
            </ContentContainer>
            <Icon name="thumbs-up-outline" size={20} />
          </CommentAnswer>
        </CommentsContainer>

        <CommentsContainer>
          <Comment>
            <OwnerPicture source={{ uri: user.avatar_url }} />
            <ContentContainer>
              <TopContent>
                <CommentContent>
                  <CommentName>Fernando Yasumoto</CommentName> Que palavra
                  abençoada! Fui muito tocado por essa palavra do Pastor
                  Arabori!Fui muito tocado por essa palavra do Pastor Arabori!
                </CommentContent>
              </TopContent>
              <CommentActions>
                <LikesCounter>1 curtida</LikesCounter>
                <AnswerActions>responder</AnswerActions>
              </CommentActions>
            </ContentContainer>
            <Icon name="thumbs-up-outline" size={20} />
          </Comment>
          <CommentAnswer>
            <CommentPicture source={{ uri: user.avatar_url }} />
            <ContentContainer>
              <TopContent>
                <CommentContent>
                  <CommentName>Fernando Yasumoto</CommentName> Que palavra
                  abençoada! Fui muito tocado por essa palavra do Pastor
                  Arabori!Fui muito tocado por essa palavra do Pastor Arabori!
                </CommentContent>
              </TopContent>
              <CommentActions>
                <LikesCounter>1 curtida</LikesCounter>
                <AnswerActions>responder</AnswerActions>
              </CommentActions>
            </ContentContainer>
            <Icon name="thumbs-up-outline" size={20} />
          </CommentAnswer>
        </CommentsContainer>
      </CommentsList>

      {/* <FullscreenButton onPress={fullScreen}>
        <FullscreenButtonText>FullScreen</FullscreenButtonText>
      </FullscreenButton> */}
    </Container>
  );
};

export default VideoPlayer;
