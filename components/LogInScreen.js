import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Functions from './Functions'
import styles from './Styles'

class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            loginFailed: null,
        }
    }

    componentDidMount() {
        this.setState({loginFailed: null});
    }

    //Request to authenticate user data with database. 
    //Navigate to MapScreen if successful. 
    async navigateToMapScreen() {
        try {
            let result = await Functions.postLoginData(this.state.userName, this.state.password);

            if(result != false) {
                this.props.navigation.navigate('Map', {userName: this.state.userName, userId: result.user_id});
            }

            //If user authentication fails, send warning to the user. 
            else {
                this.setState({loginFailed: 1});
            }
        }

        catch (error) {
            console.error(error);
        }
    }

    //**********Render Function**********
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.screenBorderStyle}/>

                <Text>Events-Map</Text>

                {/*Username text input*/}
                <TextInput 
                    style = {styles.input}
                    placeholder = "Username"
                    onChangeText = {(userName) => this.setState({userName})}
                    value = {this.state.userName}/>
 
                {/*Password text input*/}
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    placeholder = "Password"
                    onChangeText = {(password) => this.setState({password})}
                    value = {this.state.password}/>

                <View style = {styles.buttonContainer}>

                    {/*Sign in button*/}
                    <TouchableOpacity 
                        style = {styles.buttonStyle}
                        onPress = { () => this.navigateToMapScreen()}>
                        <Text style = {styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    {/*Register button*/}
                    <TouchableOpacity
                        style = {styles.buttonStyle}
                        onPress = {() => this.props.navigation.navigate('Register')}>

                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                {/*Render text if user login failed to authenticate.*/}
                {this.state.loginFailed == 1 && <Text style = {styles.loginFailedTextStyle}>Username or password incorrect</Text>}
            </View>
        );
    }
}

export default LogInScreen;