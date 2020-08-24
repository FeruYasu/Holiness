import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ImageContainer = styled.View`
  position: relative;
`;

export const MinistryImage = styled.Image`
  width: 100%;
  height: 256px;
`;

export const MinistriesContainer = styled.View``;

export const DateHeader = styled.View`
  background-color: ${(props) => props.theme.colors.accent};
  position: absolute;
  padding: 5px;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const DayHeaderText = styled.Text`
  color: #fff;
  font-size: 26px;
  font-family: 'SourceSansPro-Bold';
`;

export const MonthHeaderText = styled.Text`
  color: #fff;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin: 12px 24px;
  font-family: 'SourceSansPro-Bold';
`;

export const ContentContainer = styled.View`
  padding: 0 24px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-Bold';
`;

export const InfoContainer = styled.View``;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateInfo = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const DateText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 16px;
  font-family: 'SourceSansPro-Regular';
  margin-bottom: 4px;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 16px;
  font-family: 'SourceSansPro-Regular';
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.separator};
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
  color: ${(props) => props.theme.colors.greyText};
  font-size: 16px;
  margin-left: 8px;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.darkerGreyText};
  font-family: 'SourceSansPro-Regular';
`;

export const ParticipantsTitle = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.accent};
  font-family: 'SourceSansPro-SemiBold';
  margin-top: 16px;
`;

export const ParticipantsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  flex: 1;
  height: 100%;
`;

export const Participant = styled.View`
  margin-right: 16px;
  margin-top: 8px;
  height: 100%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const CantGoButton = styled.TouchableOpacity`
  margin-right: 20px;
  width: 120px;
`;

export const CantGoButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.accent};
  font-family: 'SourceSansPro-Bold';
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
