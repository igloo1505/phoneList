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
  const [sponsor, setSponsor] = useState(false);
  const [meeting, setMeeting] = useState("which");

  // const ph = validateNumber(phone);

  // let newContact = {
  //   name: name,
  //   phone: phone,
  //   sponsor: sponsor,
  //   meeting: meeting
  // };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "Showme") {
      console.log("Registered Admin");
      setAdmin(true);
      return;
    } else if (meeting === "which") {
      M.toast({ html: "Pick a meeting bro." });
      return;
    }
    const ph = validateNumber(phone);

    let newContact = {
      name: name,
      phone: ph,
      sponsor: sponsor,
      meeting: meeting
    };

    console.log({ ...newContact });
    addContact(newContact);
    // postContact(newContact);
    setName("");
    setPhone("");
    setSponsor(false);
    setMeeting("which");
  };
  return (
    <div className="container" style={{ width: "80%", marginTop: "80px" }}>
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
              id="meeting"
              value={meeting}
              onChange={e => setMeeting(e.target.value)}
            >
              <option value="which" disabled>
                Which meeting?
              </option>
              <option value="SNS">SNS</option>
              <option value="Commitment">Thursday Commitment</option>
              <option value="YoungPeoples">Young Peoples</option>
            </select>
          </div>
          <p className="col s12 center-align">
            <label htmlFor="sponsor">
              <input
                type="checkbox"
                id="sponsor"
                value={sponsor}
                onChange={e => setSponsor(!sponsor)}
                checked={sponsor}
              />
              <span>Can you sponsor?</span>
            </label>
          </p>

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
