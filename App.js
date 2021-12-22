import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator ,createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';

const navigator = createStackNavigator({

  Search : SearchScreen

}, {
  intialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Food Adda'
  }
});

export default createAppContainer(navigator);