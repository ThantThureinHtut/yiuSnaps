import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Welcome from "./welcome";
import Student from "./studentContainer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Welcome />
    <Student />
  </React.StrictMode>
);
