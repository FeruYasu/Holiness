import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { ITestimonial } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

export const TestimonialsList = styled(
  FlatList as new () => FlatList<ITestimonial>
)``;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin: 16px 16px;
  font-family: 'SourceSansPro-Bold';
`;

export const NewTestimonialContainer = styled.View`
  margin: 0 16px 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 25px;
  margin-right: 8px;
`;

export const NewTestimonialButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.cardBackground};
  height: 38px;
  width: 80%;
  margin-right: 16px;
  border-radius: 22px;
  border: solid 1px ${(props) => props.theme.colors.text};
  flex-direction: column;
  justify-content: center;
`;

export const NewTestimonialText = styled.Text`
  margin-left: 16px;
  font-family: 'SourceSansPro-SemiBold';
  color: ${(props) => props.theme.colors.text};
`;
