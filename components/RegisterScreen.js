import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './Styles'

class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            password: null,
            email: null,
            registerStatus: null
        }
    }

    componentDidMount() {
        this.setState({registerStatus: null});
    }

    postUserRegisterData() {
        fetch('https://event-maps-api.herokuapp.com/user/signup', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password,
          })
        }).then((response) => response.json()).then((responseJSON) => {
            let result = responseJSON;

            if(result.successful == true) {
                this.setState({registerStatus: 1});
            }

            else {
                this.setState({registerStatus: 0});
            }
        }).catch((error) => {
          console.error(error);
        });
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.screenBorderStyle}/>
                
                <Text>Register</Text>

                <TextInput
                    style = {styles.input}
                    placeholder = "Username"
                    onChangeText = {(userName) => {this.setState({userName})}}
                    value = {this.state.userName}/>

                <TextInput
                    style = {styles.input}
                    placeholder = "Password"
                    onChangeText = {(password) => {this.setState({password})}}
                    value = {this.state.password}/>

                <TextInput
                    style = {styles.input}
                    placeholder = "Email"
                    onChangeText = {(email) => {this.setState({email})}}
                    value = {this.state.email}/>

                <TouchableOpacity
                    style = {styles.buttonStyle}
                    onPress = { () => this.postUserRegisterData() }>

                    <Text style = {styles.buttonText}>Register</Text>
                </TouchableOpacity>

                {/*Render message to user depending on register success/failure.*/}
                {this.state.registerStatus == 1 &&
                    <Text style = {styles.registerSuccessTextStyle}>Registration successful!</Text>}

                {this.state.registerStatus == 0 &&
                    <Text style = {styles.registerFailedTextStyle}>Registration failed</Text>}

            </View>
        )
    }
} 

export default RegisterScreen;