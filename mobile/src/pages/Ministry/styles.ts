import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f9f9f9;
`;

export const MinistryImage = styled.Image`
  width: 100%;
  height: 248px;
`;

export const ContentContainer = styled.View`
  padding: 0 24px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #6d6d6d;
  font-family: 'SourceSansPro-Bold';
  margin-bottom: 16px;
`;

export const InfoContainer = styled.View`
  margin-top: 24px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: #626262;
  margin-left: 16px;
  font-family: 'SourceSansPro-Regular';
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #bdbdbd;
  margin: 16px 36px;
`;

export const LeadersContainer = styled.View``;

export const Leader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Picture = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  font-family: 'SourceSansPro-SemiBold';
  color: #626262;
  font-size: 16px;
  margin-left: 8px;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #626262;
  font-family: 'SourceSansPro-Regular';
`;

export const MembersTitle = styled.Text`
  font-size: 18px;
  color: #f88282;
  font-family: 'SourceSansPro-SemiBold';
  margin-top: 16px;
`;

export const MembersContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  flex: 1;
`;

export const Member = styled.View`
  margin-right: 16px;
  margin-top: 8px;
  height: 100%;
`;

export const AcceptContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const AcceptTitle = styled.Text`
  font-size: 18px;
  color: #989898;
  font-family: 'SourceSansPro-Bold';
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const AcceptDescription = styled.Text`
  font-size: 18px;
  color: #626262;
  max-width: 200px;
  font-family: 'SourceSansPro-Regular';
`;

export const ConfirmButton = styled(Button)`
  margin-right: 20px;
  background-color: #6360eb;
  width: 120px;
  border-radius: 21px;
`;

export const ConfirmButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-family: 'SourceSansPro-Bold';
`;
