import React, { useEffect, useState, Fragment } from "react";
import ContactItem from "./ContactItem";
import Filter from "./Filter";
import { getContacts, getDatalist } from "../routing";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(null);
  const [contacts, setContacts] = useState(null);
  //   const [datalist, setDataList] = useState([]);
  let dataList = [];
  useEffect(() => {
    setLoading(true);
    const get = async () => {
      const gotContacts = await getContacts();
      setContacts(gotContacts);
    };
    get();
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
      <ul className="collection" style={{ width: "80%", margin: "auto" }}>
        <h1 className="center">Filter here later</h1>
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
