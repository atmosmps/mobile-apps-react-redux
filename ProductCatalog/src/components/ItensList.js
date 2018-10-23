import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ItensList extends Component {

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => {console.log(response)})
    .catch(() => {console.log('Erro ao recuperar os dados.')}) // Apos a execucao da requisição eu possa na sequencia executar uma funcao recebendo por parametro uma resposta(response) e fazendo alguma coisa com o resultado.
  }

  render() {
    return (
      <View>
        <Itens/>
        <Itens/>
        <Itens/>
      </View>
    );
  }
}
