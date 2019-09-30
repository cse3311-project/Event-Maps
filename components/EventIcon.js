import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image} from 'react-native';

class EventIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                require('./images/icon_1.png'),
                require('./images/icon_2.png'),
                require('./images/icon_3.png'),
                require('./images/icon_4.png')
            ]
        }
    }

    _onPress =()=> {
        console.log("Touchable Test");
        console.log(JSON.stringify(this.props.category))
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress = {this._onPress}>
                    <Image 
                        style = {styles.mapIconsStyle}
                        source = {require('./images/icon_1.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapConatiner: {
        flex: 1,
    },
  
    map: {
        flex: 1,
    },
  
    createEventContainerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    mapIconsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    mapIconsStyle: {
        width: 25,
        height: 40,
    },

    input: {
      width: "90%",
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 10
    },
  
    buttonContainer: {
      flexDirection: "row",
  
    },
  
    userButton: {
      backgroundColor: "#ffd700",
      width: "45%",
      padding: 15
    },
  
    buttonText: {
      textAlign: "center",
    },
  
    slideHeader: {
      width: 100,
      height: 100,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    slidingPanelLayoutStyle: {
      width: 100,
      height: 100,
      backgroundColor: '#7E52A0',
      justifyContent: 'center',
      alignItems: 'center'
    },
});

export default EventIcon;