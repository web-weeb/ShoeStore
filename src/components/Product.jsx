import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "./Button";
import {productMYNTG} from "../constants/index";

const Product = () => {
  return (
    //Main product section starts here
    <div className="flex flex-col">
      {/* MVP COLLECTION */}
      <div>{/* Sayan's div */}</div>
      {/* NIKE TECH */}
      <div>{/* Subhojits's div */}</div>
      {/* MEET YOUR NEW TRAIL GUIDES*/}
      <div className="flex flex-col justify-center items-center gap-14 min-h-screen">
        {/* Purbarun's Div */}
        <div className="w-[1274px] grid grid-cols-4 gap-1">
          {productMYNTG.map((item, index) => (
            <img src={item.img} alt={item.name} key={index} className="w-full h-80" />
          ))}
        </div>
        <div className="h-[92px] flex flex-col justify-center items-center gap-6">
          <h1 className="text-5xl font-bold">MEET YOUR NEW TRAIL GUIDES</h1>
          <h5 className="text-primary">
            No matter the terrain, Nike Trail keeps you on the move.
          </h5>
        </div>
        <div>
          <Button name="MORE" roundedFull small />
        </div>
      </div>
      <div>{/*Purbarun's Div*/}</div>
    </div>
    //Main product section ends here
  );
};

export default SectionWrapper(Product, "product");
