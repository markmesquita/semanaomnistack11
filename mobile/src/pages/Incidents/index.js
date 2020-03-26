import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import {FlatList, ActivityIndicator} from 'react-native'

import api from '../../services/api'

import { 
  Container,
  LogoImg,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentsList,
  Incident,
  IncidentProperty,
  IncidentValue, 
  DetailsButton,
  DetailsButtonText,
  ArrowIcon
} from './styles';

export default function Incidents() {
  const [total, setTotal] = useState(0)
  const [incidents, setIncidents] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoding] = useState(false)
  const navigation = useNavigation()


  const loadIncidents = async () => {
    if(loading) {
      return;
    }

    if( total > 0 && incidents.length === total) {
      return;
    }


    const response = await api.get('incidents', {
      params: { page }
    })
    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoding(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  const navigateToDetail = (incident) => {
    navigation.navigate('Detail', { incident })
  }

  return (
    <Container>
      <Header>
        <LogoImg />
        <HeaderText>
          Total de <HeaderTextBold>{total} caso{total !== 1 ? 's': ''}</HeaderTextBold>.
        </HeaderText>
      </Header>
      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>
      <IncidentsList
        data= {incidents}
        keyExtractor={incident => String(incident.id)}
        showVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        onRefresh={() => (<ActivityIndicator />)}
        refreshing={loading}
        renderItem={({item:incident}) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>
              {incident.name}
            </IncidentValue>
        
            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>
        
            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat('pt-BR', 
                { style: 'currency', currency: 'BRL' })
                .format(incident.value)}
             </IncidentValue>
        
            <DetailsButton onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <ArrowIcon />
            </DetailsButton>
          </Incident>
        )}
      />

    </Container>
  );
} 
