/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import BasicFlatList from './components/BasicFlatList';
// import HorizontalFlatList from './components/HorizontalFlatList';

AppRegistry.registerComponent(appName, () => BasicFlatList);
