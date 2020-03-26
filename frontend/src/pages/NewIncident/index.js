import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  
  const ongId = localStorage.getItem('ongId')

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('incidents', 
        data, 
        { 
          headers: {
            Authorization: ongId
          }
        })

      history.push('/profile')
    } catch (error) {
      alert('Ocorreu algum erro ao cadastrar o caso. Tente novamente')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />Voltar para a home</Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais " 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div>
            <button type="reset" className="cancel">Cancelar</button>
            <button type="submit" className="button">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
