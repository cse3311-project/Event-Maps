import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './Styles'

class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>Events-Map</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = "Username"
                    onChangeText = {(userName) => this.setState({userName})}
                    value = {this.state.userName}/>
 
                <TextInput
                    style = {styles.input}
                    placeholder = "Password"/>

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity 
                        style = {styles.buttonStyle}
                        onPress = {() => this.props.navigation.navigate('Map', {userName: this.state.userName})}>
        
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LogInScreen;