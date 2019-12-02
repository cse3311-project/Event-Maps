import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from "react-native-elements";

import styles from './Styles'

let eventFilterList = [true, true, true, true];
let eventCategoryList = [                
    "Study Group",
    "Official UTA",
    "Food",
    "Social"];

class EventFilters extends Component {
    constructor(props) {
        super(props);
    }

    handleFilterSelect(index) {
        eventFilterList[index] = !eventFilterList[index];

        this.props.handleFilterSelect(eventFilterList);
    } 

    render() {
        return (
            <View style = {styles.filterEventEntryStyle}>
              <View style = {styles.filterHeaderStyle}>
                <Text style = {styles.createEventTextStyle}>Filters</Text>
              </View>    
          
              <View style = {styles.filtersStyle}>
                {eventFilterList.map((eventFilterList, index) => {return (
                  <CheckBox
                  key = {index}
                  title = {eventCategoryList[index]}
                  checked = {eventFilterList}
                  iconType = "material"
                  checkedIcon = "check-box"
                  uncheckedIcon = "check-box-outline-blank"
                  checkedColor = "green"
                  uncheckedColor = "blue"
                  onPress = {() => this.handleFilterSelect(index)}/>
                )})}
              </View>
            </View>
        );
    }
}

export default EventFilters;

          /*this.state.showFilters == 1 &&
            <View style = {styles.filterEventEntryStyle}>
              <View style = {styles.filterHeaderStyle}>
                <Text style = {styles.createEventTextStyle}>Filters</Text>
              </View>    
          
              <View style = {styles.filtersStyle}>
                {this.state.eventFilterList.map((eventFilterList, index) => {return (
                  <CheckBox
                  key = {index}
                  title = {this.state.eventCategoryList[index]}
                  checked = {eventFilterList}
                  iconType = "material"
                  checkedIcon = "check-box"
                  uncheckedIcon = "check-box-outline-blank"
                  checkedColor = "green"
                  uncheckedColor = "blue"
                  onPress = {() => this.handleFilterSelect(index)}/>
                )}) }
              </View>
                </View>*/