import styled, { css } from 'styled-components/native';

interface buttonProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: space-between;
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.headerBackground};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  elevation: 8;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: 'SourceSansPro-Regular';
  font-size: 20px;
  margin-left: 8px;
`;

export const PublishButton = styled.TouchableOpacity<buttonProps>`
  opacity: 0.3;

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 1;
    `}
`;

export const PublishButtonText = styled.Text`
  font-family: 'SourceSansPro-SemiBold';
  font-size: 20px;
  margin-right: 8px;
`;

export const ContentContainer = styled.View`
  margin: 16px;
`;

export const TestimonialOwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const OwnerPicture = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 25px;
  margin-right: 8px;
`;

export const RowContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const ColumnContainer = styled.View`
  flex-direction: column;
`;

export const Name = styled.Text`
  font-family: 'SourceSansPro-Bold';
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 8px;
`;

export const TestimonialInput = styled.TextInput`
  padding-left: 8px;
  font-size: 20px;
`;

export const TestimonialImage = styled.Image`
  aspect-ratio: 1;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: column;
  padding: 8px;
`;

export const PhotoButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const PhotoButtonText = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  font-family: 'SourceSansPro-SemiBold';
`;
