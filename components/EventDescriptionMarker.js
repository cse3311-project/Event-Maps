import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import Functions from "./Functions";
import styles from "./Styles";
//import { TouchableOpacity } from 'react-native-gesture-handler';

class EventDescriptionMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventId: this.props._id,
            likes: this.props.likes
        }
    }

    handleLikeButtonPress() {
        let count = this.state.likes;
        count += 1;

        Functions.patchEventLikes(this.state.eventId, count);
        this.setState({likes: count});
    }

    render() {
        return (
            <Marker
                coordinate = {this.props.coordinate}
                onPress = {() => this.handleLikeButtonPress()}>

                <View style = {this.props.eventDescriptionCatStyle}>
                    <View style = {styles.eventDescriptionStyle}>
                        <Text 
                            style = {styles.eventDescriptionHeaderStyle}>
                            {this.props.name}
                        </Text>
                
                        <Text 
                            style = {styles.eventDescriptionUserStyle}>
                            {`\tCreated by ${this.props.username}\n`}
                        </Text>
                
                        <Text>{this.props.description}</Text>

                        <TouchableOpacity
                            style = {styles.likeButtonStyle}>
                            <Text style = {styles.likeButtonTextStyle}>Like</Text>
                        </TouchableOpacity>

                        <Text>{this.state.likes}</Text>
                    </View>
                </View>
            </Marker>
        );
    }
}

export default EventDescriptionMarker;