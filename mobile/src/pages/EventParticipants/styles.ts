import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: ${(props) => props.theme.colors.accent};
  font-weight: bold;
  padding-left: 20px;
  font-family: 'SourceSansPro-SemiBold';
`;

export const ParticipantsContainer = styled.View`
  padding: 0 20px;
  justify-content: space-between;
`;
