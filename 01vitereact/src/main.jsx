import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import React from "react";

import App from "./App.jsx";

function Code() {
  return (
    <div>
      <h2>learning react !</h2>
    </div>
  );
}


const reactElement = React.createElement(
  'a',{
    href : "https://google.com",target : "_blank"
  },"click for visit google"
)

createRoot(document.getElementById("root")).render
(
   reactElement
);
