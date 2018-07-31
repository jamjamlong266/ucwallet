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

    constructor(props) {
        super(props)
        this.state = {
            crypyo : [
                {key: 'a'},
                {key: 'b'},
                {key: 'c'},
                {key: 'd'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                {key: 'e'},
                
            ]
        }
    }
      
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
                    data={this.state.crypyo}
                    renderItem={({item}) => <Text style={styles.cryptoList}>{item.key}</Text>}
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
    cryptoList: {
        flex: 1,
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor : '#000',
        alignItems : 'flex-start',
        padding: 5,
    },
})
