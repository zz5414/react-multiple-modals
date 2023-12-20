import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import App from "./App";
import { RecoilRoot } from "recoil";
import Modals from "./Modals";

ReactModal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
      <Modals />
    </React.StrictMode>
  </RecoilRoot>
);
