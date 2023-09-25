import React from "react";
import Button from "./Button";
import { xtrashoe } from "../constants/index";

const Additional_shoe = () => {
  return (
    <>
      <div className="mb-12">
        <div className="flex flex-col gap-5 my-12">
          <div className=" text-sm">
            How Others Are Wearing It <br /> Upload your photo or mention @Nike
            on Instagram for a chance to be featured.
          </div>
          <Button name={"Upload your photo"} roundedFull transparent />
        </div>
        <div className="">
          You might also like
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full">
            {xtrashoe.map((item, index) => {
              return (
                <div className=" p-2" key={index}>
                  <div className="h-full w-full bg-white">
                    <img
                      className="object-center object-cover w-full"
                      src={item.img}
                      alt="shoe"
                    />
                    <h5 className="my-2 px-4">{item.entity}</h5>
                    <p className="my-1 px-4">{item.type}</p>
                    <p className="my-1 px-4">
                      M.R.P :{" "}
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item.price)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Additional_shoe;
