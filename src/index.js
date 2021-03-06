import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/App.css";
import "./assets/styles/index.css";
import "./assets/styles/Login.css";
import "./assets/styles/breakpoints.css";
import App from "./layouts/main/App";
import reportWebVitals from "./reportWebVitals";
import { AxiosInterceptor } from "./services/axios/AxiosInterceptor";

AxiosInterceptor();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
