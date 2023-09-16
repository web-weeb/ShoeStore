import React from "react";
import { cardextra_img } from "../assets/Images";
import SectionWrapper from "../hoc/SectionWrapper";
import { allproducts } from "../constants";

const All_Products = () => {
  return (
    <>
      <div className="relative z-10 justify-between p-4 mx-6 grid grid-cols-3 gap-8">
        {allproducts.map((product, index) => (
          <React.Fragment key={index}>
            <div
              key={index}
              className="flex flex-col w-[425px] h-[582px]  shadow-md shadow-zinc-200"
            >
              <img
                src={product.img}
                alt={`card-img${index + 1}`}
                className="w-full h-[417px] rounded-t-[5px] flex justify-center items-center object-cover"
              />
            <div className="flex flex-col justify-center items-start px-4 py-4 mt-2">
                <h3 className="font-bold text-base text-primary">
                  {product.title}
                </h3>
                <h6 className="text-sm text-Text-Primary mt-1">
                  {product.name}
                </h6>
                <h6 className="text-xs text-Text-Secondary mt-2">
                  {product.type}
                </h6>
                <h6 className="text-xs text-Text-Secondary mt-2">
                  {product.color}
                </h6>
                <h6 className="text-xs text-Text-Secondary mt-2">
                  M.R.P : {product.price}
                </h6>
              </div>
            </div>
            {index === 3 && (
              <div className="flex flex-col w-[425px] h-[582px] border-black">
                <img
                  src={cardextra_img}
                  alt={`cardextra-img`}
                  className="w-full h-full rounded-t-[5px] flex justify-center items-center object-cover"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(All_Products, "");
