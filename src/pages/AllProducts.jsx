import { allproducts } from "../constants";
import { cardextra_img } from "../assets/Images";
import { Link } from "react-router-dom";
import { Product_Filter } from "../components";

const AllProducts = () => {
  return (
    <>
      <section className="mx-auto px-8 max-w-[1440px] py-12 min-h-screen">
        <Product_Filter />
        <div className="relative justify-between p-4 mx-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {allproducts.map((product, index) => (
            <Link key={index} to={"/product/detail"}>
              <div
                key={index}
                className="flex flex-col w-full h-full  shadow-md shadow-zinc-200"
              >
                {index === 4 ? null : (
                  <img
                    src={product.img}
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
                      {product.type}
                    </h6>
                    <h6 className="text-xs text-Text-Secondary mt-2">
                      {product.color}
                    </h6>
                    <h6 className="text-xs text-Text-Secondary mt-2">
                      M.R.P : {product.price}
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
