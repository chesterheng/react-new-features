import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { render } from "react-dom";
import "./index.css";
import App from "./App";

// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
