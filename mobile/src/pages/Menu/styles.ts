import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ButtonsContainer = styled.View`
  padding: 24px;
`;

export const PageButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: red;
  max-width: 100%;
  border-radius: 6px;
  height: 50px;
  justify-content: flex-start;
  padding-left: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

export const PageName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'SourceSansPro-Bold';
  margin-left: 8px;
`;
