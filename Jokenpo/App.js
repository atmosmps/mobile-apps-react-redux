/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Topo from './src/components/Topo';
import IconeGame from './src/components/IconeGame';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      escolhaUsuario: '',
      escolhacomputador: '',
      resultadoJogo: ''
    };
  }

  jokenpo(userChoice) {
    // gera numero aleatorio para escolha da maquina;
    const numAleatorio = Math.floor(Math.random() * 3)
    let machineChoice = ''
    let resultado = ''

    switch (numAleatorio) {
      case 0: machineChoice = 'Pedra'; break;
      case 1: machineChoice = 'Papel'; break;
      case 2: machineChoice = 'Tesoura'; break;
      default: machineChoice = ';'
    }

    if (machineChoice === 'Pedra') {
      if (userChoice === 'Pedra') {
        resultado = 'Empate.'
      }

      if (userChoice === 'Papel') {
        resultado = 'Você ganhou!'
      }

      if (userChoice === 'Tesoura') {
        resultado = 'Computador ganhou!'
      }
    }

    if (machineChoice === 'Tesoura') {
      if (userChoice === 'Tesoura') {
        resultado = 'Empate.'
      }

      if (userChoice === 'Pedra') {
        resultado = 'Você ganhou!'
      }

      if (userChoice === 'Papel') {
        resultado = 'Computador ganhou!'
      }
    }

    if (machineChoice === 'Papel') {
      if (userChoice === 'Papel') {
        resultado = 'Empate.'
      }

      if (userChoice === 'Tesoura') {
        resultado = 'Você ganhou!'
      }

      if (userChoice === 'Pedra') {
        resultado = 'Computador ganhou!'
      }
    }

    this.setState({
      escolhaUsuario: userChoice,
      escolhacomputador: machineChoice,
      resultadoJogo: resultado
    })
  }

  render() {
    return (
      <View>
        <Topo/>

        {/* Botões de acoes */}
        <View style={styles.painelAcoes} >
          <View style={styles.btnEscolha} >
            <Button
              title="pedra"
              onPress={() => { this.jokenpo('Pedra'); } } />
          </View>
          
          <View style={styles.btnEscolha} >
            <Button
              title="papel"
              onPress={() => { this.jokenpo('Papel'); } } />
          </View>

          <View style={styles.btnEscolha} >
            <Button
              title="tesoura"
              onPress={() => { this.jokenpo('Tesoura'); } } />
          </View>
        </View>

        {/* Botões de acoes de teste */}
        <View style={styles.container} >
          <TouchableOpacity onPress={this._onPressButton} style={styles.bottomOpacity}>
            <Icon name="rocket" color="#4F8EF7" style={styles.imageBottom} />
            <Text style={styles.textOpacity} >Teste Opacity</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton} style={styles.bottomOpacity}>
            <Icon name="rocket" color="#4F8EF7" style={styles.imageBottom} />
            <Text style={styles.textOpacity} >Teste Opacity</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton} style={styles.bottomOpacity}>
            <Icon name="rocket" color="#4F8EF7" style={styles.imageBottom} />
            <Text style={styles.textOpacity} >Teste Opacity</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultadoJogo}</Text>

          <IconeGame escolha={this.state.escolhacomputador} jogador='Computador'/>
          <IconeGame escolha={this.state.escolhaUsuario} jogador='Você'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  },
  btnEscolha: {
    width: 100
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  bottomOpacity: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    paddingVertical: 20,
    paddingHorizontal: 10,
    // marginBottom: 10
  },
  textOpacity: {
    // color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
})
