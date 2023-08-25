import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./app/store.js";
import { getAllUsers } from "./features/userSlice";
import { getAllCars } from "./features/carSlice";
import { getAllRentals } from "./features/rentalSlice";

store.dispatch(getAllUsers());
store.dispatch(getAllCars());
store.dispatch(getAllRentals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
