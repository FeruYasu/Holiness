import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 93%;
  height: 56px;
  background-color: ${(props) => props.theme.colors.background};
  margin: auto;
  border-bottom-width: 0.5px;
  border-bottom-color: #939393;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  margin-top: 5px;

  ${(props) =>
    props.isFocused &&
    css`
      border-bottom-color: ${props.theme.colors.secondary};
      border-bottom-width: 1px;
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-bottom-color: #c53030;
      border-bottom-width: 1px;
    `}
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const PlaceHolderContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-size: 16px;
  height: 20px;
  padding: 5px;
  font-family: 'SourceSansPro-Bold';
  margin-left: 0;
  padding-left: 0;

  ${(props) =>
    props.isFocused &&
    css`
      height: 40px;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      height: 40px;
    `}
`;

export const InputText = styled.Text`
  color: #939393;
  font-size: 14px;
  font-family: 'SourceSansPro-Regular';


  ${(props) =>
    props.isFocused &&
    css`
      font-size: 12px;
      color: ${props.theme.colors.secondary};
      font-weight: bold;
    `}

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      font-weight: bold;
    `}



  ${(props) =>
    props.isFilled &&
    css`
      font-size: 12px;
    `}
`;

export const InputRightContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 10px;
`;
