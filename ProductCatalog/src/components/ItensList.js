import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ItensList extends Component {

  constructor(props) {
    super(props)
    this.state = {itensList: []}
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => {
      this.setState({
        itensList: response.data
      })
    })
    .catch(() => {console.log('Erro ao recuperar os dados.')}) // Apos a execucao da requisição eu possa na sequencia executar uma funcao recebendo por parametro uma resposta(response) e fazendo alguma coisa com o resultado.
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }} >
        {
          this.state.itensList.map(item => (
            <Itens key={item.titulo} item={item} />
          ))
        }
      </ScrollView>
    );
  }
}
