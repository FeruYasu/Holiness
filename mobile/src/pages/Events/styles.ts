import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { Event } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const EventsList = styled(FlatList as new () => FlatList<Event>)`
  padding: 0 16px;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 26px;
  margin-top: 16px;
  font-family: 'SourceSansPro-Bold';
  margin-bottom: 16px;
`;

export const EventContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const DateContainer = styled.View`
  margin-right: 12px;
  height: 100px;
  justify-content: space-between;
  border-radius: 16px;
  padding: 6px;
  background-color: #a0eeff;
`;

export const InitialDate = styled.Text`
  margin-top: 4px;
`;

export const FinalDate = styled.Text`
  margin-bottom: 4px;
`;

export const ImageContainer = styled.TouchableOpacity`
  position: relative;
  flex: 1;
  height: 200px;
`;

export const EventImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  border-radius: 16px;
`;

export const EventLayer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  border-radius: 16px;
  background-color: 'rgba(0,0,0,0.5)';
`;

export const EventDate = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-SemiBold';
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'SourceSansPro-SemiBold';
  margin-top: 8px;
  margin-left: 16px;
`;
