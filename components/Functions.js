class Functions {
    //Authenticate user login data.
    static async postLoginData(username, password) {
      try {
        let response = await fetch('https://event-maps-api.herokuapp.com/user/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        });
  
        let responseJSON = await response.json();

        if(responseJSON.successful == true) {

          return responseJSON;
        }

        return false;
      }

      catch (error) {
        console.error(error);
      }
    }  

    //Fetch list of events from database.
    static async getEvents() {
      try {
        let response = await fetch('https://event-maps-api.herokuapp.com/events/', {
          method: 'GET',
        });

        let responseJSON = await response.json();

        return responseJSON.Events;
      }

      catch (error) {
        console.error(error);
      }
    }

    //Post event data to database.
    //eventName, longitude, latitude, category, eventDescription, userName
    static async postEvent(event) {
      try {
        let response = await fetch('https://event-maps-api.herokuapp.com/events/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: event.name,
            address: 'Test address',
            longitude: event.coordinate.longitude,
            latitude: event.coordinate.latitude,
            category: event.category,
            tag: 'Test tag',
            description: event.description,
            username: event.username
            //userId: '5d92642e17ad5006348be674', 
          })
        });

        let responseJSON = await response.json();

        return responseJSON;
      }

      catch (error) {
        console.error(error);
      }
    }

    static async getUserData(userId) {
      try {
        let response = await fetch('https://event-maps-api.herokuapp.com/user/' + userId, {
          method: 'GET',
        });

        let responseJSON = await response.json();

        return responseJSON;
      }

      catch (error) {
        console.error(error);
      }
    }

    static async patchEventLikes(eventId, val) {
      try {
        let response = await fetch('https://event-maps-api.herokuapp.com/events/' + eventId, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([{"propName": "likes", "value": val}])
        });

        let responseJSON = await response.json();

        console.log(responseJSON);
      }

      catch (error) {
        console.error(error);
      }
    }
}

export default Functions;


    /*
    getUserEvents() {
      id = this.state.userId.toString();
    
      return fetch('https://event-maps-api.herokuapp.com/user/events/created/' + id, {
        method: 'GET'
      }).then((response) => response.json()).then((responseJSON) => {
        //let mylist = (responseJSON.Events);
        //console.log(mylist[0].name, mylist[1].name);
        let mylist = responseJSON.UserCreatedEvents;

        console.log(mylist);
        console.log(id);
        console.log("Test test 1");
    })}
    */