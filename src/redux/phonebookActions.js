import { v4 as uuidv4 } from "uuid";
import phonebookActionTypes from "./phonebookActionTypes";
const addContact = (name, number) => ({
  type: phonebookActionTypes.ADD_CONTACT,
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
});

const deleteContact = (id) => ({
  type: phonebookActionTypes.DELETE_CONTACT,
  payload: {
    id,
  },
});
const changeFilter = (filter) => ({
  type: phonebookActionTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
});

export default { addContact, deleteContact, changeFilter };
