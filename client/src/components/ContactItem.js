import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <li className="collection-item">
      <span>{contact.name}</span>
      <br />
      <span style={{ paddingLeft: "20px" }}>{contact.phone}</span>
      {contact.type === "personal" ? (
        <i className="material-icons right green-text">check_circle</i>
      ) : (
        <span style={{ fontSize: "2rem" }}> </span>
      )}
    </li>
  );
};

export default ContactItem;
