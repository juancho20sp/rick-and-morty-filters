import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Para crear el store
import { createStore } from "redux";

// Traemos el Provider
import { Provider } from "react-redux";

// Traemos el reducer
import { reducer } from "./redux/reducers";

const options = [
  {
    id: 1,
    name: "Alive"
  },
  {
    id: 2,
    name: "Dead"
  },
  {
    id: 3,
    name: "Unknown"
  }
];

// Creamos el estado inicial
const initialState = {
  isMenuOpen: false,
  statusOptions: options,
  locationOptions: [],
  characterList: [],
  status: "",
  location: "",
  name: "",
  nextPage: 1
};

// Creamos el store
const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
