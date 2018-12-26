import React, {Component} from 'react';
import {View, Image} from 'react-native';

const image = require('../../img/jokenpo.png');

export default class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={image}/>
            </View>
        );
    }
}
