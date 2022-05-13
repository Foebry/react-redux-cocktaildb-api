import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./data";
import App from "./App";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
