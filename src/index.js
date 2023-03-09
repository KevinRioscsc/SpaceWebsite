import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import RoutesTree from "./RoutesTree";
import App from "./App";
import NavigationGuide from "./Component/Context/navigationGuide";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationGuide>
      <HashRouter>
        <RoutesTree />
      </HashRouter>
    </NavigationGuide>
  </React.StrictMode>
);
