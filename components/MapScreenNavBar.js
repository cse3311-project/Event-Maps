import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Styles';

class MapScreenNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style = {styles.createEventStyle}>
            <TouchableOpacity
              onPress = {() => this.props.handleNavBarFilterSelect()}>
              <Text style = {styles.createEventTextStyle}>Filters</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress = {() => this.props.handleCreateSelect()}>
              <Text style = {styles.createEventTextStyle}>Create</Text>
            </TouchableOpacity>  

            <TouchableOpacity
              onPress = {() => this.props.handleUserSelect()}>
              <Text style = {styles.createEventTextStyle}>User</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

export default MapScreenNavBar;