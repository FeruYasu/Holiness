import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: 50px;
`;

export const LogoImage = styled.Image`
  width: 120px;
  margin-left: 20px;
`;

export const HeaderRightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 0 20px;
`;
