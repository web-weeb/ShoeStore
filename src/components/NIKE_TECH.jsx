import React from "react";
import { nikeTechData } from "../constants/index";
import Button from "./Button";

const NIKE_TECH = () => {
  return (
    <>
      <div>
        <p>Featured</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {nikeTechData.map((item, index) => (
            <img
              key={index}
              className="w-full h-full rounded-md object-cover object-center"
              src={item.url}
              alt=""
            />
          ))}
        </div>
        <h1 className="text-center mt-10">NIKE TECH</h1>
        <p className="text-primary text-center">
          Elevate your look with our MVP collection - a striking blend of bold
          colors and classic styles
        </p>
        <div className="flex justify-center my-10">
          <Button name={"More"} roundedFull small />
        </div>
      </div>
    </>
  );
};

export default NIKE_TECH;
