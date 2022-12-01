import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import "rsuite/dist/rsuite.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
