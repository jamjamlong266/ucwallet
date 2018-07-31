import React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';

import { createStackNavigator } from 'react-navigation';
export default class Dashboard extends React.Component {
    static navigationOptions = {
        headerTitle: <Text>LOGO</Text>,
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
        headerStyle: {
            backgroundColor: '#fff',
        }
    };
      
    render() {
        return(
            <View style={styles.Container}>
                <Text style={styles.totalAmount}>100.00</Text>
                <Text style={styles.currency}>RM</Text>
                <Text>DASHBOARD</Text>
                <Button
                    title="Back to home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    totalAmount: {
        fontSize: 25,
    },
    currency: {
        fontSize: 18
    },
})
