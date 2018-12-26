import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const pedra = require('../../img/pedra.png');
const papel = require('../../img/papel.png');
const tesoura = require('../../img/tesoura.png');

export default class IconeGame extends Component {
    render() {
        if (this.props.escolha === 'Pedra') {
            return (
                <View style={styles.viewResult}>
                    <Text style={styles.txtViewResult}>{this.props.jogador}</Text>
                    <Image source={pedra} />
                </View>
            )
        } else if (this.props.escolha === 'Papel') {
            return (
                <View style={styles.viewResult}>
                    <Text style={styles.txtViewResult}>{this.props.jogador}</Text>
                    <Image source={papel} />
                </View>
            )
        } else if (this.props.escolha === 'Tesoura') {
            return (
              <View style={styles.viewResult}>
                    <Text style={styles.txtViewResult}>{this.props.jogador}</Text>
                    <Image source={tesoura} />
              </View>
            )
        }
        return false;
    }
}

const styles = StyleSheet.create({
    viewResult: {
        alignItems: 'center',
        marginBottom: 10,
    },
    txtViewResult: {
        fontSize: 15
    }
})
