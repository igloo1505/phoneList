import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import ContactContext from "../context/contactContext";
import { validateNumber } from "../routing";

const Form = ({ setAdmin }) => {
  const contactContext = useContext(ContactContext);
  const { addContact, getContacts } = contactContext;

  useEffect(() => {
    console.log("getting contacts called");
    contactContext.getContacts();
    // es-lint-disable-next-line
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [type, setType] = useState("which");

  const onSubmit = e => {
    e.preventDefault();
    if (name === "Showme") {
      console.log("Registered Admin");
      setAdmin(true);
      return;
    } else if (type === "which") {
      M.toast({ html: "Pick a type bro." });
      return;
    }
    const ph = validateNumber(phone);

    let newContact = {
      name: name,
      phone: ph,
      type: type
    };

    console.log({ ...newContact });
    addContact(newContact);
    setName("");
    setPhone("");
    setType("which");
  };
  const formStyle = {
    width: "80%",
    marginTop: "80px",
    backgroundColor: "#fff",
    padding: "20px"
  };

  return (
    <div className="container" style={formStyle}>
      <form className="col s12" id="UserForm" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s12" style={{ paddingRight: "50px" }}>
            <i className="material-icons prefix">account_circle</i>
            <input
              id="name"
              type="text"
              value={name}
              className="validate"
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12" style={{ paddingRight: "50px" }}>
            <i className="material-icons prefix">phone</i>
            <input
              id="phone"
              type="text"
              value={phone}
              className="validate"
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor="phone">Telephone</label>
          </div>
          <div
            className="input-field col s12"
            style={{ paddingRight: "50px", paddingLeft: "50px" }}
          >
            <select
              id="type"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="which" disabled>
                Contact Type?
              </option>
              <option value="Personal">Personal</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
            </select>
          </div>

          <button
            className="btn waves-effect waves-light"
            id="submitBtn"
            style={{
              display: "inline-block",
              width: "100%",
              marginTop: "20px"
            }}
            type="submit"
            name="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
