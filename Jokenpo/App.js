/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      escolhaUsuario: '',
      escolhacomputador: '',
      resultadoJogo: ''
    }
  }

  jokenpo(userChoice) {
    // gera numero aleatorio para escolha da maquina
    var numAleatorio = Math.floor(Math.random() * 3)
    var machineChoice = ''
    var resultado = ''

    switch (numAleatorio) {
      case 0: machineChoice = 'Pedra'; break;
      case 1: machineChoice = 'Papel'; break;
      case 2: machineChoice = 'Tesoura'; break;
    }

    if (machineChoice == 'Pedra') {
      if (userChoice == 'Pedra') {
        resultado = 'Empate.'
      }

      if (userChoice == 'Papel') {
        resultado = 'Usuario ganhou.'
      }

      if (userChoice == 'Tesoura') {
        resultado = 'Computador Ganhou.'
      }
    }

    if (machineChoice == 'Tesoura') {
      if (userChoice == 'Tesoura') {
        resultado = 'Empate.'
      }

      if (userChoice == 'Pedra') {
        resultado = 'Usuario ganhou.'
      }

      if (userChoice == 'Papel') {
        resultado = 'Computador ganhou.'
      }
    }

    if (machineChoice == 'Papel') {
      if (userChoice == 'Papel') {
        resultado = 'Empate.'
      }

      if (userChoice == 'Tesoura') {
        resultado = 'Usuario ganhou.'
      }

      if (userChoice == 'Pedra') {
        resultado = 'Computador ganhou.'
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
        <View>
          <Image source={require('./img/jokenpo.png')}/>
        </View>

        <View></View>
        <View></View>

        <Text>Escolha do computador: {this.state.escolhacomputador} </Text>
        <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultadoJogo}</Text>

        <Button title="pedra" onPress={ () => { this.jokenpo('Pedra') } } />
        <Button title="papel" onPress={ () => { this.jokenpo('Papel') } } />
        <Button title="tesoura" onPress={ () => { this.jokenpo('Tesoura') } } />
      </View>
    );
  }
}
