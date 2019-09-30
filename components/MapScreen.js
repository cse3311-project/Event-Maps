import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SlidingPanel from 'react-native-sliding-up-down-panels';

import styles from './Styles'
import { throwStatement } from '@babel/types';

class MapScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: this.props.navigation.getParam('userName'),
        latitude: 0,
        longitude: 0,
        category: null,

        //Marker of currently selected posistion on map.
        markerSelect: null,

        //Arrays of event markers.
        markerEventCat1: [],
        markerEventCat2: [],
        markerEventCat3: [],
        markerEventCat4: [],

        //Holds the user's description of event to be created. User sets with <TextInput>.
        eventDescription: null,

        //Boolean. null to hide event description, 1 to show event description.
        showDecription: null,

        eventDescriptionText: null,

        error: null
    }
      this.handleCreateEvent = this.handleCreateEvent.bind(this);
      this.handleMarkerPress = this.handleMarkerPress.bind(this);
    }

    //Function called with an event icon is pressed.
    //Shows the decription of the event on the screen.
    handleMarkerPress(arg1, arg2) {
      console.log(arg1, arg2);

      this.setState({showDecription: 1});

      text = this.state.userName + "\n" + JSON.stringify(arg1) + "\n" + JSON.stringify(arg2);

      this.setState({eventDescriptionText: text});
    }

    //Function called when 'Create Event' button is pressed.
    //Adds an event icon at selected location.
    handleCreateEvent() {
      if(this.state.category === '1') {
        this.setState({
          markerEventCat1: [
            ...this.state.markerEventCat1,
            {
              description: this.state.eventDescription,
              coordinate: this.state.markerSelect,
            }
          ]
        })
        console.log("TEST 1");
      }

      else if(this.state.category === '2') {
        this.setState({
          markerEventCat2: [
            ...this.state.markerEventCat2,
            {
              description: this.state.eventDescription,
              coordinate: this.state.markerSelect
            }
          ]
        })
        console.log("TEST 2");
      }

      else if(this.state.category === '3') {
        this.setState({
          markerEventCat3: [
            ...this.state.markerEventCat3,
            {
              description: this.state.eventDescription,
              coordinate: this.state.markerSelect
            }
          ]
        })
        console.log("TEST 3")
      }
      
      else if(this.state.category === '4') {
        this.setState({
          markerEventCat4: [
            ...this.state.markerEventCat4,
            {
              description: this.state.eventDescription,
              coordinate: this.state.markerSelect
            }
          ]
        })
        console.log("TEST 4")
      }
    }

    //Get user's current location when component mounts.
    componentDidMount() {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        error => this.setState({error: error.message})
      );
      console.log(JSON.stringify(this.state.userName))
    }
  
    //Render function.
    render() {
      return (
        <View style = {styles.mapConatiner}>
            <MapView
                showsUserLocation = {true}
                onPress = {(event) => this.setState({markerSelect: event.nativeEvent.coordinate})}
                style = {styles.map}
                initialRegion = {{
                latitude: this.state.latitude, 
                longitude: this.state.longitude, 
                latitudeDelta: 0.09, 
                longitudeDelta: 0.0921}}>
  
                {this.state.markerSelect &&     
                  <Marker 
                    coordinate = {this.state.markerSelect}>
                    <Image 
                      source = {require('./images/marker-black.png')}
                      style = {styles.eventIconStyle}/>
                  </Marker>}

                {this.state.markerEventCat1.map((markerEventCat1, i) => {return (
                  <Marker 
                    key = {i}
                    coordinate = {markerEventCat1.coordinate}  
                    description = {markerEventCat1.description} 
                    onPress = {() => {this.handleMarkerPress(markerEventCat1.description, markerEventCat1.coordinate)}}>
                      <Image 
                        source = {require('./images/marker-red.png')}
                        style = {styles.eventIconStyle}/> 
                  </Marker>)})}

                {this.state.markerEventCat2.map((markerEventCat2, i) => {return (
                  <Marker 
                    key = {i}
                    coordinate = {markerEventCat2.coordinate}
                    description = {markerEventCat2.description}
                    onPress = {() => {this.handleMarkerPress(markerEventCat2.description, markerEventCat2.coordinate)}}>
                    <Image
                      source = {require('./images/marker-purple.png')}
                      style = {styles.eventIconStyle}/>
                  </Marker>)})}

                {this.state.markerEventCat3.map((markerEventCat3, i) => {return (
                  <Marker 
                    key = {i}
                    coordinate = {markerEventCat3.coordinate}
                    description = {markerEventCat3.description}
                    onPress = {() => {this.handleMarkerPress(markerEventCat3.description, markerEventCat3.coordinate)}}>
                    <Image
                      source = {require('./images/marker-green.png')}
                      style = {styles.eventIconStyle}/>
                  </Marker>)})}

                {this.state.markerEventCat4.map((markerEventCat4, i) => {return (
                  <Marker 
                    key = {i}
                    coordinate = {markerEventCat4.coordinate}
                    description = {markerEventCat4.description}
                    onPress = {() => {this.handleMarkerPress(markerEventCat4.description, markerEventCat4.coordinate)}}>
                    <Image
                      source = {require('./images/marker-orange.png')}
                      style = {styles.eventIconStyle}/>
                  </Marker>)})}
            </MapView>

            {this.state.showDecription && 
                  <View style = {styles.eventDescriptionStyle}>
                    <Text>{this.state.eventDescriptionText}</Text>
                  </View>}

            <View style = {styles.testStyle}>
            <SlidingPanel
                headerLayoutHeight = {50}
                headerLayout = {() =>
                    <View style = {styles.headerLayoutStyle}>
                        <Text>Create Event</Text>
                    </View>
                }
                slidingPanelLayout = {() =>
                    <View style = {styles.slidingPanelLayoutStyle}>
                        <View style = {styles.inputContainerStyle}>
                            <TextInput 
                                style = {styles.input}
                                placeholder = "Location"/>

                            <TextInput
                                style = {styles.input}
                                placeholder = 'Description'
                                onChangeText = {(eventDescription) => this.setState({eventDescription})}
                                value = {this.state.eventDescription}/>
                        </View>
                        <View style = {styles.mapIconsContainerStyle}>
                            <TouchableOpacity
                                onPress = {() => this.setState({category: '1'})}>
                                <Image 
                                    style = {styles.mapIconsStyle}
                                    source = {require('./images/marker-red.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = {() => this.setState({category: '2'})}>
                                <Image 
                                    style = {styles.mapIconsStyle}
                                    source = {require('./images/marker-purple.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = {() => this.setState({category: '3'})}>
                                <Image 
                                    style = {styles.mapIconsStyle}
                                    source = {require('./images/marker-green.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress = {() => this.setState({category: '4'})}>
                                <Image 
                                    style = {styles.mapIconsStyle}
                                    source = {require('./images/marker-orange.png')}/>
                            </TouchableOpacity>
                        </View>   

                        <View style = {styles.buttonContainerStyle}>
                            <TouchableOpacity
                                style = {styles.buttonStyle}
                                onPress = {this.handleCreateEvent}>
                                <Text style = {styles.buttonText}>Create Event</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }/>
            </View>
        </View>
        );
    }
}

export default MapScreen;