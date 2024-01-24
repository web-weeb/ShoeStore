import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import { AppProvider } from "./store/product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
  </AuthProvider>
);
