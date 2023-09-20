import React from "react";
import Button from "./Button";
import { nikeTechData } from "../constants/index";

const CardsCollection = (props) => {
  return (
    <>
      <div className="">
        <img
          src={props.src}
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
    </>
  );
};

const Essential_collection = () => {
    return (
      <>
        {/* ESSENTIAL COLLECTION */}
        <div>
          <div className="flex flex-col justify-center items-center gap-14 min-h-screen w-[1274px] mx-auto">
            <div className="grid grid-cols-3 gap-10">
              {nikeTechData.map((item, index) => (
                <CardsCollection src={item.url} key={index} />
              ))}
            </div>
            <div className="h-[92px] flex flex-col justify-center items-center gap-6">
              <h1 className="text-5xl font-bold">ESSENTIAL COLLECTIONS</h1>
              <h5 className="text-primary">
                Essential itmes for your daily life.
              </h5>
            </div>
            <div>
              <Button name="MORE" roundedFull small />
            </div>
          </div>
        </div>
      </>
    );
};

export default Essential_collection;