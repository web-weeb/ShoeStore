import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Contact,
  Category,
  Footer,
  Product,
  Navbar,
  All_Products,
  Product_Details,
} from "./components";
import "./App.css";
import Circle from "./components/Circle";
import Metadata from "./components/Metadata";
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
        <div className="min-h-screen justify-center flex items-center relative max-w-[1540px] mx-auto">
          <Circle position={"top-left"} />
          <Circle position={"bottom-left"} />
          <Hero />
        </div>
        <Category />
        <Product />
        <All_Products />
        <Product_Details />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
