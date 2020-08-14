import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 93%;
  height: 70px;
  background: #f9f9f9;
  margin: auto;
  border-bottom-width: 0.8px;
  border-bottom-color: #939393;
  flex-direction: row;
  align-items: flex-end;
  position: relative;

  ${(props) =>
    props.isFocused &&
    css`
      border-bottom-color: #18307a;
      border-bottom-width: 1px;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-bottom-color: #18307a;
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
  color: #5a5a5a;
  font-size: 20px;
  height: 20px;
  padding: 5px;

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
  font-size: 16px;

  ${(props) =>
    props.isFocused &&
    css`
      font-size: 12px;
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
