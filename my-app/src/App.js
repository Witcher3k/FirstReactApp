import React, { Component } from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import ContactList from "./ContactList";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    //pobieranie danych z API
    fetch("https://randomuser.me/api/?results=50")
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(json => {
        // console.log(json.results);
        const filtered = json.results.map(item => ({
          name: item.name.first,
          email: item.email,
          phone: item.phone,
          picture: item.picture.large
        }));
        this.setState({ users: filtered });
      });
  }

  render() {
    const users = this.state.users;

    return (
      <div className="ui container">
        <AppHeader />

        <ContactList contacts={users} />
      </div>
    );
  }
}

export default App;
