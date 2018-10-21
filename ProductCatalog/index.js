/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import ItensList from './src/components/ItensList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ItensList);
