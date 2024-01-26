import React from "react";
import Button from "./Button";
import { xtrashoe } from "../constants/index";
import { useProductContext } from "../store/product";
import FormatPrice from "../Helpers/FormatPrice";
import { Link } from "react-router-dom";

const Additional_shoe = () => {
  const { isLoading, products } = useProductContext();
  const filteredProducts = products.filter((product) => !product.featured);

  const firstThreeProducts = filteredProducts.slice(0, 3);
  return (
    <>
      <div className="mb-12 px-10">
        <div className="flex flex-col gap-5 my-12">
          <div className=" text-sm">
            How Others Are Wearing It <br /> Upload your photo or mention @Nike
            on Instagram for a chance to be featured.
          </div>
          <Button name={"Upload your photo"} roundedFull transparent />
        </div>
        <div>
          <h4 className="ms-1">You might also like</h4>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full">
            {firstThreeProducts.map((item, index) => {
              return (
                <Link to={`/product/${item._id}`}>
                  <div className=" p-2" key={index}>
                    <div className="h-full w-full bg-white">
                      <img
                        className="object-center object-cover w-full"
                        src={item.imageFiles[0].url}
                        alt="shoe"
                      />
                      <h5 className="my-2 px-4">{item.name}</h5>
                      <p className="my-1 px-4">{item.category}</p>
                      <p className="my-1 px-4">
                        M.R.P : <FormatPrice price={item.price} />
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Additional_shoe;
