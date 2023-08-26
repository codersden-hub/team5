import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";
import { ContextApp } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter hashType="slash">
      <ContextApp>
        <App />
      </ContextApp>
    </HashRouter>
  </React.StrictMode>
);