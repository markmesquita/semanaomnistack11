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

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top:48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentsList = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
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

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;

export const ArrowIcon = styled(Feather).attrs({
  name: 'arrow-right'
})`
  font-size: 16px;
  color: #e02041;
`;