import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import { AppProvider } from "./store/product.jsx";
import { FilterContextProvider } from "./store/filter.jsx";
import { CartProvider } from "./store/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </AuthProvider>
);
