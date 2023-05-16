import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App saludo="Todo list" />);

//ReactDOM.createPortal(<h1>Hola</h1>, document.getElementById("modal"));