import { createStore, combineReducers } from "redux";
import phonebookReducer from "./phonebookReducer";

const rootReducer = combineReducers({ phonebook: phonebookReducer });

const persistedState = localStorage.getItem('reduxState') 
? JSON.parse(localStorage.getItem('reduxState'))
: {}

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
