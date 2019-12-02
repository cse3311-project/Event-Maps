import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Styles'

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.userProfileStyle}>
              <View style = {styles.createEventEntryHeaderStyle}>
                <Text style = {styles.createEventTextStyle}>User Profile</Text>
              </View>    
              
              <Image
                source = {require("./images/user-profile.png")}
                style = {styles.userProfileImageStyle}/>

              <Text style = {styles.userProfileUserNameTextStyle}>{this.props.userName}</Text>

              <View style = {styles.horizontalRuleStyle}/>

              <Text style = {styles.userProfileTextStyle}>{this.props.userEmail}</Text>
              <Text style = {styles.userProfileTextStyle}>Likes: </Text>
            </View>
        );
    }
}

export default UserProfile;