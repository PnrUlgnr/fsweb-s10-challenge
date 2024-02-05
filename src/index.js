import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import rootReducer from "./index.js";
import minnetReducer from "./reducers.js";

const store = createStore(minnetReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
