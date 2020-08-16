import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

export const MinistryImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Title = styled.Text`
  font-size: 24px;
  padding: 10px;
  color: #2825bf;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: #6d6d6d;
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  padding: 10px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #626262;
  margin-left: 15px;
  margin-right: 30px;
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #bdbdbd;
  margin: 0 35px;
  margin-top: 15px;
  margin-bottom: 12px;
`;

export const LeadersContainer = styled.View`
  padding: 0 20px;
  justify-content: space-between;
`;

export const Leader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const Picture = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-left: 20px;
`;
