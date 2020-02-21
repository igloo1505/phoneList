import React, { useEffect, useState, Fragment, useContext } from "react";
import ContactContext from "../context/contactContext";
import ContactItem from "./ContactItem";
import Filter from "./Filter";
import { getDatalist, getContacts } from "../routing";

const Admin = () => {
  const contactContext = useContext(ContactContext);
  const { getContacts, contacts } = contactContext;
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(null);
  // const [contacts, setContacts] = useState(null);

  let dataList = [];
  useEffect(() => {
    setLoading(true);
    getContacts();

    setLoading(false);
    // es-lint-disable-next-line
  }, []);
  let output = [];
  if (filtered !== null) {
    output = filtered;
    console.log({ ...output });
  } else {
    output = contacts;
    console.log({ ...output });
  }
  if (contacts !== null && loading === false) {
    dataList = getDatalist(contacts);
    console.log(getDatalist(contacts));
  }
  return (
    <Fragment>
      <Filter
        dataList={dataList}
        setFiltered={setFiltered}
        contacts={contacts}
      />
      <ul
        className="collection"
        style={{ width: "80%", margin: "auto", marginBottom: "20px" }}
      >
        <h5 className="center">Generic Phone List</h5>
        {contacts !== null
          ? output.map(contact => (
              <ContactItem contact={contact} key={contact._id} />
            ))
          : ""}
      </ul>
    </Fragment>
  );
};

export default Admin;
