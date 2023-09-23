import React, { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { productDetailsimg } from "../constants";
import RightProductDetails from "./RightProductDetails";

const Product_Details = () => {
  const [mainImage, setMainImage] = useState(
    productDetailsimg[0]?.img[0] || "http://via.placeholder.com/535x615"
  ); // default image

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <>
      <div className="grid grid-cols-2 justify-center relative p-4 mx-6">
        {/* left side start */}
        <div className="flex flex-row gap-4">
          <div className="overflow-y-auto max-h-[615px]">
            <div className="flex flex-col gap-2">
              {productDetailsimg.map((product) => (
                <React.Fragment>
                  {product.img.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt=""
                      className="w-[95px] h-[81px] rounded-[5px] object-cover cursor-pointer"
                      onMouseOver={() => handleImageClick(image)}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={mainImage}
              alt=""
              className="w-[535px] h-[615px] rounded-[5px] object-cover"
            />
          </div>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="flex justify-center pl-28 items-center">
          <div className="overflow-y-auto max-h-[615px]">
            <RightProductDetails />
          </div>
        </div>
        {/* right side end */}
      </div>
    </>
  );
};

export default SectionWrapper(Product_Details, "");
