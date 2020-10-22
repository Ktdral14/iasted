import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./screens/Main/Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery";
import Popper from "../node_modules/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
