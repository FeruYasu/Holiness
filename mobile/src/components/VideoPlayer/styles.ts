import styled from 'styled-components/native';
import Video from 'react-native-video';
import ProgressBar from 'react-native-progress/Bar';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const VideoHeaderContainer = styled.View`
  padding: 8px 8px;
`;

export const HeaderTopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 16px;
`;

export const VideoContainer = styled.View`
  position: relative;
`;

export const VideoTitle = styled.Text`
  font-size: 20px;
  font-family: 'SourceSansPro-Bold';
  justify-content: center;
`;

export const VideoDescription = styled.Text``;

export const OwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
  border-top-color: ${(props) => props.theme.colors.separator};
  padding: 8px 0;
`;

export const OwnerPicture = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const OwnerName = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-Regular';
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

export const VideoSocialActionsContainer = styled.View`
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
`;

export const CommentsList = styled.ScrollView``;

export const CommentsContainer = styled.View`
  margin-bottom: 16px;
`;

export const Comment = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  align-items: flex-start;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export const TopContent = styled.View`
  flex-direction: row;
`;

export const CommentName = styled.Text`
  font-family: 'SourceSansPro-Bold';
  color: ${(props) => props.theme.colors.text};
  margin-right: 8px;
`;

export const CommentContent = styled.Text`
  font-family: 'SourceSansPro-SemiBold';
  color: ${(props) => props.theme.colors.darkerGreyText};
  margin-right: 8px;s
`;

export const CommentActions = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

export const LikesCounter = styled.Text`
  font-size: 12px;
  font-family: 'SourceSansPro-Bold';
  color: ${(props) => props.theme.colors.tabButtonText};
`;

export const AnswerActions = styled.Text`
  font-size: 12px;
  font-family: 'SourceSansPro-Bold';
  margin-left: 36px;
  color: ${(props) => props.theme.colors.tabButtonText};
`;

export const CommentAnswer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  padding-left: 52px;
  align-items: flex-start;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const CommentPicture = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 14px;
`;

export const Duration = styled.Text``;

export const MainTitle = styled.Text``;

export const FullscreenButton = styled.TouchableOpacity``;
export const FullscreenButtonText = styled.Text``;
