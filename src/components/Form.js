import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { validateNumber, postContact } from "../routing";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sponsor, setSponsor] = useState(false);
  const [meeting, setMeeting] = useState(null);

  const onSubmit = async () => {
    const ph = validateNumber(phone);
    let newContact = {
      name: name,
      phone: ph,
      sponsor: sponsor,
      meeting: meeting
    };
    console.log({ ...newContact });
    if (name === "" || phone === "") {
      M.toast({ html: "Oh no, please fill this out completely" });
    }
    postContact(newContact);
  };
  return (
    <div className="container" style={{ width: "80%" }}>
      <form className="col s12" id="UserForm">
        <div className="row">
          <div className="input-field col s12" style={{ paddingRight: "50px" }}>
            <i className="material-icons prefix">account_circle</i>
            <input
              id="name"
              type="text"
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
              defaultValue="which"
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
                value="false"
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
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
