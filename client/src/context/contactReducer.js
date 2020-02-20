import { ADDCONTACT, ERROR, GETCONTACTS } from "./Types";
import M from "materialize-css/dist/js/materialize.min";

export default (state, action) => {
  switch (action.type) {
    case ADDCONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false
      };
    case GETCONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case ERROR:
      M.toast({ html: "Ah Shit. Something went wrong" });
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
