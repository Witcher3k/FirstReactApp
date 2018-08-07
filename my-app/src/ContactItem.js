import React from "react";
import { Component } from "react";

class ContactItem extends Component {
  render() {
    const imgUrl = `https://api.adorable.io/avatars/55/${this.props.login}.png`;
    return (
      <li className="item">
        <img src={imgUrl} className="ui mini rounded image" />
        <div className="content">
          <h4 className="header">{this.props.name}</h4>
          <div className="description">{this.props.department}</div>
        </div>
      </li>
    );
  }
}
export default ContactItem;
