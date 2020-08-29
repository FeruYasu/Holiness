import styled from 'styled-components/native';
import Video from 'react-native-video';
import ProgressBar from 'react-native-progress/Bar';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const VideoContainer = styled.View`
  position: relative;
`;

export const VideoContent = styled(Video)`
  height: ${Dimensions.get('window').width * 0.57125}px;
`;

export const VideoBar = styled(ProgressBar).attrs({
  unfilledColor: 'rgba(255,255,255,0.5)',
  borderWidth: 0,
  borderRadius: 0,
  width: Dimensions.get('window').width,
})``;

export const PlayButton = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  top: ${(Dimensions.get('window').width * 0.57125) / 2 - 15}px;
`;

export const Duration = styled.Text``;

export const MainTitle = styled.Text``;

export const FullscreenButton = styled.TouchableOpacity``;
export const FullscreenButtonText = styled.Text``;
