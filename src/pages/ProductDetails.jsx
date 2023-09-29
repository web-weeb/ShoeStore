import { useState } from "react";
import { RightProductDetails } from "../components";
import { Additional_shoe } from "../components";
import { productDetailsimg } from "../constants";
import { Fragment } from "react";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(
    productDetailsimg[0]?.img[0] || "http://via.placeholder.com/535x615"
  ); // default image

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <>
      <section className="min-h-screen py-12 relative max-w-[1540px] mx-auto">
        <div className="grid xl:grid-cols-2 grid-cols-1 justify-center relative p-4 mx-6">
          {/* left side start */}
          <div className="flex flex-row max-md:flex-col gap-4 justify-center max-xl:py-4">
            <div className="overflow-y-auto max-md:order-2 max-h-[615px]">
              <div className="flex flex-wrap  md:flex-col gap-2">
                {productDetailsimg.map((product, i) => (
                  <Fragment key={i}>
                    {product.img.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt=""
                        className="w-[95px] h-[81px] rounded-[5px] object-cover cursor-pointer"
                        onMouseOver={() => handleImageClick(image)}
                      />
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="flex max-md:order-1 justify-center items-center">
              <img
                src={mainImage}
                alt=""
                className="w-[535px] rounded-[5px] object-cover object-center"
              />
            </div>
          </div>
          {/* left side end */}
          {/* right side start */}
          <div className="flex justify-center xl:pl-28 max-xl:pt-4 items-center">
            <div className="overflow-y-auto max-h-[615px]">
              <RightProductDetails />
            </div>
          </div>
          {/* right side end */}
        </div>
        {/* ADDITIONAL SHOE START*/}
        <div>
          <Additional_shoe />
        </div>
        {/* aDDITIONAL SHOE END */}
      </section>
    </>
  );
};

export default ProductDetails;
