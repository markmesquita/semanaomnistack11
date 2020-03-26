import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import {  
  Container,
  LogoImg,
  Header,
  BackButton,
  ArrowIcon,
  ScrollIncidents,
  IncidentCard,
  IncidentGroup,
  IncidentGroupItem,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionButton,
  ActionText
} from './styles';

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident
  const message = `Olá ${incident.name}. Estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', 
   { style: 'currency', currency: 'BRL' })
   .format(incident.value)}`

  const handleNavigateGoBack = () => {
    navigation.goBack()
  }

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  const sendWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <LogoImg />
        <BackButton onPress={handleNavigateGoBack}>
          <ArrowIcon />
        </BackButton>
      </Header>
      <ScrollIncidents showsVerticalScrollIndicator={false}>
        <IncidentCard>
          <IncidentGroup>
            <IncidentGroupItem>
              <IncidentProperty>CASO:</IncidentProperty>
              <IncidentValue>{incident.title}</IncidentValue>
            </IncidentGroupItem>
            <IncidentGroupItem>
              <IncidentProperty>ONG:</IncidentProperty>
              <IncidentValue style={{marginBottom: 0}}>{incident.name}</IncidentValue>
              <IncidentValue>{incident.city}/{incident.uf}</IncidentValue>
            </IncidentGroupItem>
          </IncidentGroup>
      
          <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
          <IncidentValue>
            {incident.description}
            </IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue style={{marginBottom: 0}}>
            {Intl.NumberFormat('pt-BR', 
                { style: 'currency', currency: 'BRL' })
                .format(incident.value)}
          </IncidentValue>
        </IncidentCard>
        <ContactBox>
          <HeroTitle>Salve o dia!</HeroTitle>
          <HeroTitle>Seja o herói desse caso.</HeroTitle>
          <HeroDescription>Entre em contato:</HeroDescription>

          <Actions>
            <ActionButton onPress={sendWhatsApp}>
              <ActionText>WhatsApp</ActionText>
            </ActionButton>
            <ActionButton onPress={sendMail}>
              <ActionText>E-mail</ActionText>
            </ActionButton>
          </Actions>
        </ContactBox>
      </ScrollIncidents>
    </Container>
  );
}
