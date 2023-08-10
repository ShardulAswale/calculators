import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);

//  if (process.env.NODE_ENV === "development") {
//    import("autopreview/react").then(({ default: AutoPreview }) => {
//      new AutoPreview("#root");
//    });
//  }
