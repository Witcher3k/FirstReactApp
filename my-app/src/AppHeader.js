import React from "react";
import { Component } from "react";

class AppHeader extends Component {
  render() {
    return (
      <header className="">
        <nav className="ui three item menu">
          <a href="#" className="item">
            Lista kontaktów
          </a>
          <div className="item">
            <button className="ui button">Dodaj</button>
          </div>
          <div className="item">
            <i className="user icon" />
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
