import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.headerBackground};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  elevation: 8;
  padding-top: ${getStatusBarHeight() + 8}px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: 'SourceSansPro-Regular';
  font-size: 20px;
  margin-left: 8px;
`;

export const TestimonialContentContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding: 16px;
  flex-direction: row;
`;

export const OwnerPicture = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const ContentContainer = styled.View`
  margin-left: 8px;
  flex-shrink: 1;
`;

export const CommentName = styled.Text`
  font-family: 'SourceSansPro-Bold';
  color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.Text`
  flex-shrink: 1;
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
`;
