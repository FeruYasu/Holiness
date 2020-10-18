import styled, { css } from 'styled-components/native';
import Video from 'react-native-video';
import ProgressBar from 'react-native-progress/Bar';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  padding-top: 8px;
`;

export const VideoHeaderContainer = styled.View`
  padding: 8px 8px;
  background-color: ${(props) => props.theme.colors.background};
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
  color: ${(props) => props.theme.colors.text};
`;

export const VideoDescription = styled.Text`
  color: ${(props) => props.theme.colors.greyText};
`;

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
  color: ${(props) => props.theme.colors.greyText};
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

export const CommentsList = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.background};
`;

export const CommentsContainer = styled.View`
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.colors.background};
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
  margin-bottom: 16px;
`;

export const CommentButtonContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 16px 16px;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.testimonial &&
    css`
      position: absolute;
      bottom: -5px;
      z-index: 10;
    `}
`;

export const CommentInputContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 0 16px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const CommentInput = styled.TextInput`
  padding-left: 8px;
  flex: 1;
`;

export const CommentButton = styled.TouchableOpacity``;

export const CommentButtonText = styled.Text`
  color: ${(props) => props.theme.colors.greyText};
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
  margin-right: 8px;
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

export const AnswerActions = styled.TouchableOpacity`
  margin-left: 36px;
`;

export const AnswerActionsText = styled.Text`
  font-size: 12px;
  font-family: 'SourceSansPro-Bold';
  color: ${(props) => props.theme.colors.tabButtonText};
`;

export const CommentAnswer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  padding-left: 52px;
  align-items: flex-start;
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

export const SendCommentButton = styled.TouchableOpacity``;

export const OpacityLayer = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  flex: 1;
`;
