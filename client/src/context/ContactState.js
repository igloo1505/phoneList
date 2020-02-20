import React, { useReducer } from "react";
import Axios from "axios";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import { ADDCONTACT, ERROR, GETCONTACTS } from "./Types";

const ContactState = props => {
  const initialState = {
    contacts: null,
    loading: null,
    errors: null
  };
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = async contact => {
    try {
      const res = await Axios.post("/list", contact, config);
      dispatch({
        type: ADDCONTACT,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response
      });
    }
  };

  const getContacts = async () => {
    try {
      const res = await Axios.get("/list");
      dispatch({
        type: GETCONTACTS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response
      });
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        loading: state.loading,
        errors: state.errors,
        addContact,
        getContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
