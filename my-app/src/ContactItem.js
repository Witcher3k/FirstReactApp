import React from "react";
import { Component } from "react";

class ContactItem extends Component {
  render() {
    const imgUrl = this.props.picture;

    return (
      <li className="item">
        <img src={imgUrl} className="ui small rounded image" />
        <div className="content">
          <h4 className="header">{this.props.name}</h4>
          <div className="description">{this.props.email}</div>
        </div>
      </li>
    );
  }
}
export default ContactItem;
