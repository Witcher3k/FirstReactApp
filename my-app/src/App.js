import React, { Component } from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import ContactList from "./ContactList";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <AppHeader />
        <ContactList />
      </div>
    );
  }
}

export default App;
