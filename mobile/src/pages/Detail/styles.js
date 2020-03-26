import styled from 'styled-components/native';
import Constants from 'expo-constants'
import { Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const LogoImg = styled.Image.attrs({
  source: logoImg
})``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: flex-end;
`

export const ArrowIcon = styled(Feather).attrs({
  name: 'arrow-left'
})`
  font-size: 28px;
  color: #e02041;
`; 
export const ScrollIncidents = styled.ScrollView``;

export const IncidentCard = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const IncidentGroup = styled.View`
  flex-direction: row;
  justify-content: space-between; 
`;

export const IncidentGroupItem = styled.View`
  flex: 1;
`;


export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const ContactBox = styled.View`
background-color: #fff;
border-radius: 8px;
padding: 24px;
margin-bottom: 16px;
margin-top: 8px;`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #e02041;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

