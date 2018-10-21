import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ItensList extends Component {
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
