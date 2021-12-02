import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalDataProvider from "context/GlobalData";
import { store } from "store/store";
import { Provider } from "react-redux";
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "main.scss";
const root = document.querySelector("#root");

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalDataProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalDataProvider>
    </React.StrictMode>
  </BrowserRouter>,
  root
);
