import phonebookActionTypes from "./phonebookActionTypes";

// { phonebook:{
//   contacts: [],
//   filter: "",

// }};
import { combineReducers } from "redux";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case phonebookActionTypes.ADD_CONTACT:
      return [payload.contact, ...state];

    case phonebookActionTypes.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case phonebookActionTypes.CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
