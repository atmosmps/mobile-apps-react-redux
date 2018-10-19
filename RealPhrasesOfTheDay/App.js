/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const getNewPhrase = () => {
  var number = Math.random();
  number = Math.floor(number * 15)

  var phrases = Array();
  phrases[0] = '"Deixa meu C de mão." - Cavalcante, Igor';
  phrases[1] = '"O PHP têm muitos problemas, mas também têm muitas soluções." - Jorge, Fredson';
  phrases[2] = '"Liderando a frente... do React." - Carlos, Werliton';
  phrases[3] = '"Malhar na academia é fácil, agora quero ver malhar na mangueira que nem eu..." - Carlos, Werliton';
  phrases[4] = '"Transparencia, inspeção e adpatação." - Tavares, Amauri';
  phrases[5] = '"Show de bolas!" - Augusto, Thiago';
  phrases[6] = '"Eu vou ali tomar um leitinho batido." - Augusto, Thiago';
  phrases[7] = '"Você tem interesse?" - Sales, Raul';
  phrases[8] = '"Já andei de ônibus mais de 20 vezes." - Augusto, Thiago';
  phrases[9] = '"A palavra de Hoje é hierarquia." - Jorge, Fredson';
  phrases[10] = '"What fuck is that?" - Matos, Celso';
  phrases[11] = '"Eu escolhi minha mãe." - William, William';
  phrases[12] = '"Você tá desmotivado maluco?" - William, William';
  phrases[13] = '"Vamos descer o nível?" - William, William';
  phrases[14] = '"Faz sentido isso que eu tô falando?" - William, William';

  var getPhraseSelected = phrases[number];
  Alert.alert('Mensagem Top do NTI', getPhraseSelected);
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <Text style={styles.welcome}>Frases do NTI!</Text>
        <Text style={styles.instructions}>Vamos desce o nível?</Text>
        <Image
          source={require('./imgs/logo.png')}
        />
        <TouchableOpacity
          onPress={getNewPhrase}
          style={styles.yesButton}>
          <Text
            style={styles.yesText}>Sim!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  yesButton: {
    backgroundColor: '#538530',
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginTop: 20
  },
  yesText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
