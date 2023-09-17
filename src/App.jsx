import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Contact,
  Category,
  Footer,
  Product,
  Navbar,
  All_Products,
} from "./components";
import "./App.css";
import Circle from "./components/Circle";
const App = () => {
  return (
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
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
