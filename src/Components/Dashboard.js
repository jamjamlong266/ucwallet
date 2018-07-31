import React from 'react';
import {StyleSheet, View, Text, Button, FlatList } from 'react-native';

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
               <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding:15,
    },
    totalAmount: {
        fontSize: 35,
    },
    currency: {
        fontSize: 25
    },
})
