import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';

import styles from "./Styles";

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventName: null,
            eventDescription: null,
            eventDate: null,
            category: "Category",
            categoryColor: "blue",
            showCreate: -1
        }
    }

    handleCategorySelect(itemValue, itemIndex) {
        console.log(itemValue, itemIndex);
        if(itemIndex == 0) {
            this.setState({categoryColor: "blue"});
        }

        else if(itemIndex == 1) {
            this.setState({categoryColor: "orange"});
        }

        else if(itemIndex == 2) {
            this.setState({categoryColor: "red"});
        }

        else if(itemIndex == 3) {
            this.setState({categoryColor: "pink"});
        }

        this.setState({category: itemValue});
    }

    getEventDetails() {
        let event = {
            name: this.state.eventName,
            description: this.state.eventDescription,
            date: this.state.eventDate,
            category: this.state.category
        }

        this.props.getEventDetails(event);
    }

    render() {
        return (
            <View>
            {this.state.showCreate == -1 &&
                <View style = {styles.createEventEntryOneStyle}>
                    <View style = {styles.createEventEntryHeaderStyle}>
                        <Text style = {styles.createEventTextStyle}>Create</Text>
                    </View>    
            
                    <TextInput
                        style = {styles.input}
                        placeholder = "Event Name"
                        onChangeText = {(name) => this.setState({eventName: name})}
                        value = {this.state.eventName}/>

                    <TextInput
                        style = {styles.input}
                        placeholder = "Description"
                        onChangeText = {(description) => this.setState({eventDescription: description})}
                        value = {this.state.eventDescription}/>

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity
                            style = {styles.buttonStyle}
                            onPress = {() => this.setState({showCreate: 1})}>
                            <Text style = {styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>}

            {this.state.showCreate == 1 && 
                <View style = {styles.createEventEntryTwoStyle}>
                    <View style = {styles.createEventEntryHeaderStyle}>
                        <Text style = {styles.createEventTextStyle}>Create</Text>
                    </View>    
            
                    <TextInput
                        style = {styles.input}
                        placeholder = "Time"/>

                    <TextInput
                        style = {styles.input}
                        placeholder = "Date"
                        onChangeText = {(date) => this.setState({eventDate: date})}
                        value = {this.state.eventDate}/>

                    
                    <View style = {{
                        position: "absolute", 
                        bottom: 122, 
                        left: 70, 
                        height: 24, 
                        width: 8, 
                        backgroundColor: this.state.categoryColor}}>
                    </View>

                    <Picker
                        mode = "dropdown"
                        selectedValue = {this.state.category}
                        style = {{height: 100, width: 200}}
                        onValueChange = {(itemValue, itemIndex) => {this.handleCategorySelect(itemValue, itemIndex)}}>
                        <Picker.Item label = "Study Group" value = "1"/>
                        <Picker.Item label = "Official UTA" value = "2"/>
                        <Picker.Item label = "Food" value = "3"/>
                        <Picker.Item label = "Social" value = "4"/>
                    </Picker>
                    
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity
                            style = {styles.buttonStyle}
                            onPress = {() => this.getEventDetails()}>
                            <Text style = {styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            </View>
        );
    }
}

export default CreateEvent;