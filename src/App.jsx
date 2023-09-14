import { BrowserRouter } from "react-router-dom";
import { Hero, Contact, Category, Footer, Product, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-10">
        <div className="min-h-screen">
          <Navbar />
          <Hero />
        </div>
        <Category />
        <Product />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
