import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f9f9f9;
`;

export const MinistryImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: #6d6d6d;
  font-weight: bold;
  padding-left: 20px;
`;

export const InfoContainer = styled.View`
  padding-left: 20px;
  margin-top: 20px;
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
  margin-bottom: 10px;
`;

export const Picture = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-left: 20px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #626262;
  padding: 10px;
  padding-left: 20px;
`;

export const MembersTitle = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: #f88282;
  font-weight: bold;
  padding-left: 20px;
`;

export const MembersContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  flex: 1;
  margin-bottom: 10px;
`;

export const Member = styled.View`
  margin-right: 8px;
`;

export const AcceptContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const AcceptTitle = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: #989898;
  font-weight: bold;
  padding-left: 20px;
`;

export const AcceptDescription = styled.Text`
  font-size: 14px;
  color: #626262;
  padding: 10px;
  max-width: 200px;
`;

export const ConfirmButton = styled(BaseButton)`
  margin-right: 20px;
  background-color: #6360eb;
  padding: 10px;
  width: 120px;
  border-radius: 21px;
`;

export const ConfirmButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
