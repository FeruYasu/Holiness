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

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
  margin-bottom: 10px;
  margin-left: 70px;
  margin-right: 50px;
`;

export const ParticipantsContainer = styled.View`
  padding: 0 20px;
  justify-content: space-between;
`;

export const Participant = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Picture = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-left: 24px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.greyText};
  font-family: 'SourceSansPro-SemiBold';
`;
