import React from "react";
import { nikeTechData } from "../constants/index";
import Button from "./Button";

const NIKE_TECH = () => {
  return (
    <>
      <div>
        <p>Featured</p>
        <div className="grid grid-cols-3 gap-0">
          {nikeTechData.map((item, index) => (
            <img
              key={index}
              className="w-[80%] h-[100%]"
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
          <Button name={"More"} roundedFull />
        </div>
      </div>
    </>
  );
};

export default NIKE_TECH;