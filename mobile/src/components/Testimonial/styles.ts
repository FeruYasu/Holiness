import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

import { Pressable } from 'react-native';

interface LikeButtonProps {
  isLiked: boolean;
}

export const TestimonialContainer = styled.View`
  background-color: #fff;
  margin-bottom: 36px;
`;

export const HeaderContainer = styled.View`
  padding: 0 16px;
  padding-top: 16px;
`;

export const TestimonialTitle = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-family: 'SourceSansPro-BoldItalic';
`;

export const Content = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-Regular';
`;

export const TestimonialImage = styled.Image`
  margin-top: 16px;
  height: 300px;
`;

export const TestimonialOwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const OwnerPicture = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 25px;
  margin-right: 8px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColumnContainer = styled.View`
  flex-direction: column;
`;

export const Name = styled.Text`
  font-family: 'SourceSansPro-Bold';
  font-size: 18px;
`;

export const RightArrow = styled.Text`
  font-size: 20px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.separator};
`;

export const TestimonialMinistry = styled.Text`
  font-family: 'SourceSansPro-BoldItalic';
  font-size: 18px;
`;

export const Date = styled.Text`
  margin-top: -2px;
  font-size: 12px;
`;

export const CommentsButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const EmojisContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 6px;
`;

export const EmojiImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-left: -6px;
`;

export const CommentsText = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-Regular';
  color: ${(props) => props.theme.colors.darkerGreyText};
`;

export const Counter = styled.Text`
  font-size: 20px;
  font-family: 'SourceSansPro-Regular';
  color: ${(props) => props.theme.colors.darkerGreyText};
  margin-left: 6px;
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 8px;
  align-items: center;
`;

export const LikeButton = styled(Pressable)``;

export const LikeButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CommentButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LikeButtonText = styled.Text<LikeButtonProps>`
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
  margin-left: 8px;
  color: ${(props) => props.theme.colors.text};

  ${(props) =>
    props.isLiked &&
    css`
      color: #497ae9;
    `}
`;

export const CommentButtonText = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
  margin-left: 8px;
  color: ${(props) => props.theme.colors.text};
`;

export const LikeContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 40px;
  width: ${Dimensions.get('window').width - 32}px;
  justify-content: space-between;
  border-radius: 26px;
  margin-left: 16px;
  margin-right: 16px;
  elevation: 1;
  background-color: ${(props) => props.theme.colors.cardBackground};
  padding: 16px;
`;

export const EmojiButton = styled(Pressable)``;

export const Emoji = styled.Image`
  height: 40px;
  width: 40px;
`;
