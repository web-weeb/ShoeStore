import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import "./App.css";
import Metadata from "./components/Metadata";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <>
      <Metadata>
        <title>Ecommerce</title>
        <meta name="description" content="My super webpage" />
        <meta name="keywords" content="react, helmet, ssr" />
        <meta name="author" content="My Name" />
      </Metadata>
      {/* changes ☝️ */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/detail" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
