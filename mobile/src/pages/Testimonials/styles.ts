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
