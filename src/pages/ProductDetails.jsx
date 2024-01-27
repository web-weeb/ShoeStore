import { useEffect, useState } from "react";
import { RightProductDetails } from "../components";
import { Additional_shoe } from "../components";
import { productDetailsimg } from "../constants";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../store/product";
// import { getSingleProduct } from "../store/product";

const API = "https://shoe-backend-6w6r.onrender.com/api/data/getAllProducts";

const ProductDetails = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  // console.log(singleProduct);
  const { id } = useParams();
  console.log();

  const {
    name,
    title,
    category,
    price,
    colors,
    description,
    featured,
    shipping,
    stock,
    reviews,
    stars,
    imageFiles,
  } = singleProduct;

      useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
      }, [id]);


    const [mainImage, setMainImage] = useState(
    productDetailsimg[0]?.img[0] || "http://via.placeholder.com/535x615"
  ); // default image

    if (isSingleLoading) {
      return <h1>Loading...</h1>;
    }


  const mainImages =
    imageFiles && imageFiles.length > 0
      ? imageFiles[0].url
      : "http://via.placeholder.com/535x615";

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <>
      {isSingleLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="min-h-screen py-12 relative max-w-[1540px] mx-auto">
          <div className="grid xl:grid-cols-2 grid-cols-1 justify-center relative p-4 mx-6">
            {/* left side start */}
            <div className="flex flex-row max-md:flex-col gap-4 justify-center max-xl:py-4">
              <div className="overflow-y-auto max-md:order-2 max-h-[615px]">
                <div className="flex flex-wrap  md:flex-col gap-2">
                    <Fragment>
                      {Array(6)
                        .fill()
                        .map((_, imageIndex) => (
                            <img
                              key={imageIndex}
                              src={mainImages}
                              alt=""
                              className="w-[95px] h-[81px] rounded-[5px] object-cover cursor-pointer"
                              onMouseOver={() => handleImageClick(mainImages)}
                            />
                        ))}
                    </Fragment>
                </div>
              </div>
              <div className="flex max-md:order-1 justify-center items-center">
                {imageFiles && imageFiles.length > 0 && (
                  <img
                    src={imageFiles[0].url}
                    alt="hi"
                    className="w-[535px] rounded-[5px] object-cover object-center"
                  />
                )}
              </div>
            </div>
            {/* left side end */}
            {/* right side start */}
            <div className="flex justify-center xl:pl-28 max-xl:pt-4 items-center">
              <div className="overflow-y-auto max-h-[615px]">
                {/* RightProductDetails is here */}
                <RightProductDetails
                  name={name}
                  title={title}
                  category={category}
                  price={price}
                  colors={colors}
                  description={description}
                  featured={featured}
                  shipping={shipping}
                  stock={stock}
                  reviews={reviews}
                  stars={stars}
                />
                {/* RightProductDetails is end */}
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
      )}
    </>
  );
};

export default ProductDetails;
