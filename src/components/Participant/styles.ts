import styled from 'styled-components/native';

export const User = styled.View`
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

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
  margin-bottom: 10px;
  margin-left: 70px;
  margin-right: 50px;
`;
