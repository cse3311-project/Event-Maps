import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({

    filtersStyle: {
      flexDirection: "column",
      
    },

    horizontalRuleStyle: {
      width: width * 0.75,
      borderBottomColor: "black",
      borderBottomWidth: 4,
      marginBottom: 16
    },

    userProfileImageStyle: {
      marginTop: 10,
      marginBottom: 15
    },

    userProfileUserNameTextStyle: {
      fontSize: 20,
      fontWeight: "bold"
    },

    userProfileTextStyle: {
      fontSize: 14
    },

    createEventStyle: {
      //flex: 1,
      position: "absolute",
      bottom: 0,
      width, 
      height: height * 0.075,
      paddingTop: 6,
      paddingBottom: 10,
      backgroundColor: "blue",
      borderBottomColor: "orange",
      borderBottomWidth: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignContent: "center"
    },

    eventInputContainerStyle: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },

    filterEventEntryStyle: {
      backgroundColor: "white",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: "center",
      position: "absolute",
      //left: 0,
      //right: 0,
      bottom: 0,
      width: width,
      height: height * 0.5
    },

    createEventEntryOneStyle: {
      backgroundColor: "white",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: width,
      height: height * 0.45
    },

    createEventEntryTwoStyle: {
      backgroundColor: "white",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: width,
      height: height * 0.55
    },

    userProfileStyle: {
      backgroundColor: "white",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: "center",
      position: "absolute",
      //left: 0,
      //right: 0,
      bottom: 0,
      width: width,
      height: height * 0.4
    },

    filterHeaderStyle: {
      width,
      backgroundColor: "blue",
      borderBottomColor: "orange",
      borderBottomWidth: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center"
    },

    createEventEntryHeaderStyle: {
      width,
      backgroundColor: "blue",
      borderBottomColor: "orange",
      borderBottomWidth: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },

    createEventTextStyle: {
      color: "white",
      fontSize: 20,
      alignSelf: "center",
      //textAlignVertical: "center",
    },

    //LoginScreen Styles
    container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center"
    },

    screenBorderStyle: {
      width,
      position: "absolute",
      top: 0,
      borderTopColor: "blue",
      borderBottomColor: "orange",
      borderTopWidth: 12,
      borderBottomWidth: 8
    }, 

    buttonStyle: {
      width: "40%",
      padding: 15,
      borderRadius: 15,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: "orange"
      //backgroundColor: "#ffd700"
    },

    likeButtonStyle: {
      width: "40%",
      padding: 5,
      borderRadius: 15,
      marginTop: 15,
      marginBottom: 10,
      backgroundColor: "#ccc"
      //backgroundColor: "#ffd700"
    },

    likeButtonTextStyle: {
      color: "white",
      textAlign: "center"
    },

    likeButtonContainerStyle: {
      flexDirection: "row"
    },

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "90%"
    },

    loginFailedTextStyle: {
      color: "red"
    },  

    registerFailedTextStyle: {
      color: "red"
    },

    registerSuccessTextStyle: {
      color: "green"
    },
    //
    mapConatiner: {
        flex: 1,
    },
  
    map: {
        flex: 10,
    },
  
    //Styles for when clicking on an event marker.
    eventDescriptionHeaderStyle: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center"
    },

    eventDescriptionUserStyle: {
      fontStyle: "italic",
      textAlign: "right"
    },

    eventDescriptionStyle: {
      backgroundColor: "white",
      borderRadius: 10,
      margin: 10,
      padding: 10
    },

    eventDescriptionCat1Style: {
      backgroundColor: "blue",
      borderRadius: 10,
      margin: 1,
      padding: 1
    },
    
    eventDescriptionCat2Style: {
      backgroundColor: "orange",
      borderRadius: 10,
      margin: 1,
      padding: 1
    },

    eventDescriptionCat3Style: {
      backgroundColor: "red",
      borderRadius: 10,
      margin: 1,
      padding: 1
    },

    eventDescriptionCat4Style: {
      backgroundColor: "pink",
      borderRadius: 10,
      margin: 1,
      padding: 1
    },

    createEventContainerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    mapIconsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },

    selectIconStyle: {
      width: 30,
      height: 45
    },

    eventIconStyle: {
      width: 40,
      height: 55
    },

    mapIconsStyle: {
        width: 25,
        height: 40,
    },

    input: {
      width: "75%",
      backgroundColor: "#ddd",
      borderRadius: 15,
      borderColor: "black",
      padding: 15,
      marginTop: 10,
    },
  
    inputContainerStyle: {
      flex: 0,
      alignItems: 'center'
    },

    buttonContainerStyle: {
      alignItems: 'center'
    },
  
    userButton: {
      backgroundColor: "#ffd700",
      width: "45%",
      padding: 15
    },
  
    buttonText: {
      textAlign: "center",
    },
  
    headerLayoutStyle: {
      width,
      height: 50,
      //backgroundColor: "#ffd700",
      backgroundColor: "blue",
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    slidingPanelLayoutStyle: {
      width,
      height,
      //backgroundColor: "#1e90ff",
      backgroundColor: "white",
      alignContent: "center",
      justifyContent: 'flex-start',
    },

    testStyle: {
      flex: 1
    },

    mapHeaderStyle: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "white"
    },

    eventCategoryDropdownStyle: {
      width: "75%",
      padding: 15,
      marginTop: 10,
      alignSelf: "center",
      backgroundColor: "white"
    }
  });

  