/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const PressBt = () => {
  alert('Botão pressionado');
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title='Agora'
          onPress={PressBt}
        />
        <TouchableOpacity style={styles.botao} onPress={this._onPressButton}>
          <Text style={styles.textBotao}>Botão de Teste</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // vai preencher o espaco de um de um total de um;
    flexDirection: 'column',
    justifyContent: 'center', //Alinha na vertical
    alignItems: 'center', // Alinha na horizontal
    backgroundColor: '#F5FCFF',
    // padding: e um espacamento interno ao componente
    // Todos os componentes sao criados dentro de uma "caixa"
    // margin: define um espacamento externo ao componente
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      heigth: 5
    },
    shadowOpacity: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 8 //definie o arredondamento do botao
  },
  textBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
