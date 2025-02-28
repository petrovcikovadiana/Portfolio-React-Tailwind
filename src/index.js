import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //➡️ React Strict Mode je nástroj pro vývojáře, který pomáhá odhalit chyby, Neovlivňuje produkční aplikaci – je aktivní pouze v development módu, Pomáhá detekovat potenciální chyby a optimalizovat kód během vývoje
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
