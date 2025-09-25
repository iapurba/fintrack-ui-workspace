import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const mount = (el: Element) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};
