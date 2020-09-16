import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const VideoHeaderContainer = styled.View`
  padding: 8px 8px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderTopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 16px;
`;

export const VideoTitle = styled.Text`
  font-size: 20px;
  font-family: 'SourceSansPro-Bold';
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
`;

export const VideoDescription = styled.Text`
  color: ${(props) => props.theme.colors.greyText};
`;

export const OwnerName = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro-Regular';
  color: ${(props) => props.theme.colors.greyText};
`;

export const VideoSocialActionsContainer = styled.View`
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
`;
