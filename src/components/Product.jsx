import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";

const Product = () => {
  return (
    //Main product section starts here
    <div>
      {/* MVP COLLECTION */}
      <div>{/* Sayan's div */}</div>
      {/* NIKE TECH */}
      <div>{/* Subhojits's div */}</div>
      {/* MEET YOUR NEW TRAIL GUIDES*/}
      <div>{/* Purbarun's Div */}</div>
      <div>{/*Purbarun's Div*/}</div>
    </div>
    //Main product section ends here
  );
};

export default SectionWrapper(Product, "product");
