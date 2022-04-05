/**
 * @format
 */

/*
for App.tsx
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/screen/HomeScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
