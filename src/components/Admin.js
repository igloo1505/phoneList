import React, { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import { getContacts } from "../routing";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const get = async () => {
      const contacts = await getContacts();
      setContacts(contacts);
    };
    get();
    // es-lint-disable-next-line
  }, []);
  return (
    <ul className="collection" style={{ width: "80%", margin: "auto" }}>
      <h1 className="center">Filter here later</h1>
      {contacts.length > 0
        ? contacts.map(contact => (
            <ContactItem contact={contact} key={contact._id} />
          ))
        : ""}
    </ul>
  );
};

export default Admin;
