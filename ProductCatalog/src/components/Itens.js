import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item} >
        <View style={styles.foto} >
          <Image
            style={{ height: 100, width: 100}}
            source={{ uri: this.props.item.foto}}
          />
        </View>
        
        <View style={styles.detalheItem}>
          <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValor}>R$ {this.props.item.valor}</Text>
          <Text style={styles.txtDetalhe}>Local: {this.props.item.local_anuncio}</Text>
          <Text>Dt.publicação: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalheItem: {
    flex: 1,
    marginLeft: 20
  },
  txtTitulo: {
    fontSize: 18,
    color: 'blue',
    margin: 5
  },
  txtValor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtDetalhe: {
    fontSize: 16
  }
})
