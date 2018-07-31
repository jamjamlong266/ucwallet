import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo';
import { createStackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: 250,
        height: 35,
        borderWidth:1,
        borderColor:'black',
        padding:5,
        justifyContent:'center',
        marginTop : 10,
        marginBottom: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>THIS IS MAIN SCREEN</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Name" 
                />
                <TextInput style={styles.inputStyle}
                    placeholder="Password" 
                />
                <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        )
    }
}
