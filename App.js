import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Main from './src/Components/Main';
import Dashboard from './src/Components/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigtor style={styles.container}/>
    );
  }
}

const AppNavigtor = createStackNavigator({
    Home: Main ,
    Dashboard: Dashboard,
}) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
