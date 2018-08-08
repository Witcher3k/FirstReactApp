import React from "react";
import { Component } from "react";
import ContactItem from "./ContactItem";

class ContactList extends Component {
  contactsToContactItem = contact => {
    return (
      <ContactItem
        key={contact.phone}
        name={contact.name}
        email={contact.email}
        picture={contact.picture}
      />
    );
  };

  render() {
    console.log(this.props);
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.contacts.map(this.contactsToContactItem)}
      </ul>
    );
  }
}

export default ContactList;
