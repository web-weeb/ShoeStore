import { allproducts } from "../constants";
import { cardextra_img } from "../assets/Images";
import { Link, useParams } from "react-router-dom";
import { Product_Filter } from "../components";
import FormatPrice from "../Helpers/FormatPrice";
import { useProductContext } from "../store/product";
import { useState } from "react";
import { useFilterContext } from "../store/filter";

const AllProducts = () => {

    const { filter_products } = useFilterContext();
    console.log(filter_products);
    
    const filteredProducts = filter_products.filter(
      (product) => !product.featured
    );
    


  return (
    <>
        <section className="mx-auto px-8 max-w-[1440px] py-12 min-h-screen">
          <Product_Filter />
          <div className="relative justify-between p-4 mx-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {filteredProducts.map((product, index) => (
              <Link to={`/product/${product._id}`} key={index}>
                <div
                  className="flex flex-col w-full h-full  shadow-md shadow-zinc-200"
                >
                  {index === 4 ? null : (
                    <img
                      src={product.imageFiles[0].url}
                      alt={`card-img${index + 1}`}
                      className="w-full rounded-t-[5px] flex justify-center items-center object-cover"
                    />
                  )}
                  {index === 4 && (
                    <img
                      src={cardextra_img}
                      alt={`cardextra-img`}
                      className="w-full h-full rounded-t-[5px] flex justify-center items-center object-cover"
                    />
                  )}
                  {index === 4 ? null : (
                    <div className="flex flex-col justify-center items-start px-4 py-4 mt-2">
                      <h3 className="font-bold text-base text-primary">
                        {product.title}
                      </h3>
                      <h6 className="text-sm text-Text-Primary mt-1">
                        {product.name}
                      </h6>
                      <h6 className="text-xs text-Text-Secondary mt-2">
                        {product.category}
                      </h6>
                      <h6 className="text-xs text-Text-Secondary mt-2 text-center">
                        <div>
                          Colors:
                          {product.colors.map((curcolor, index) => {
                            return (
                              <button
                                key={index}
                                className={
                                  product.colors === curcolor
                                    ? "mx-1 rounded-full w-4 h-4 border-4 border-b-orange-500"
                                    : "mx-1 rounded-full w-4 h-4"
                                }
                                style={{ backgroundColor: curcolor }}
                                onClick={() => setColor(curcolor)}
                              >
                                {product.colors === curcolor ? (
                                  <RiCheckFill />
                                ) : null}
                              </button>
                            );
                          })}
                        </div>
                      </h6>
                      <h6 className="text-xs text-Text-Secondary mt-2">
                        M.R.P : <FormatPrice price={product.price} />
                      </h6>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
    </>
  );
};

export default AllProducts;
