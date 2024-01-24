import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { productDetailsimg, sbtn, review } from "../constants";
import Button from "./Button";
import { RiHeart2Fill, RiShoppingBag3Fill } from "react-icons/ri";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import FormatPrice from "../Helpers/FormatPrice";

const hideShowAnimation = {
  initial: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
  },
  animate: {
    opacity: 1,
    height: "auto",
    overflow: "visible",
  },
  exit: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
  },
  transition: {
    duration: 0.5,
  },
};

const RightProductDetails = (props) => {
  const [deli, setDeli] = useState(false);
  const delivery = () => {
    setDeli(!deli);
  };

  const [rev, setRev] = useState(false);
  const Rev = () => {
    setRev(!rev);
  };

  const [info, setInfo] = useState(false);
  const Info = () => {
    setInfo(!info);
  };

  const formatCurrency = (num) => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(num);
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-full h-auto">
        {/* Description */}
        <h4 className="text-[32px]">{props.name}</h4>
        <h5 className="text-[28px]">{props.category}</h5>
        <h5 className="text-[28px]">MRP :<FormatPrice price={props.price}/></h5>
        <div className="text-[#A0A0A0] font-[Mukta-Vaani] text-[16px] font-[400]">
          inc. of all taxes <br /> (Also includes all applicable duties)
        </div>
        {/* 4 images */}
        <div className="flex flex-row gap-4">
          {productDetailsimg[0].img.map(
            (image, imageIndex) =>
              imageIndex < 4 && (
                <img
                  key={imageIndex}
                  src={image}
                  alt=""
                  className="w-[95px] h-[81px] rounded-[5px] object-cover cursor-pointer"
                />
              )
          )}
        </div>
        {/* size chart */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="font-[Montserrat] text-4 font-medium ">
              Select Size
            </div>
            <div className="font-[Montserrat] text-4 text-[#A0A0A0] ">
              Size Guide
            </div>
          </div>
          {/* size buttons */}
          <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 gap-1 mt-2 sm:grid-cols-2 grid-cols-2">
            {sbtn.map((item, index) => (
              <Button
                key={index}
                name={item.size}
                transparent
                fullWidth
                noRounded
                offShadow
              />
            ))}
          </div>
        </div>
        {/* Two Buttons */}
        <div className="grid grid-row-2 max-xl:max-w-xs gap-4 mt-8 max-xl:ms-auto">
          <Button
            roundedFull
            name="Add to bag"
            fullWidth
            icon={<RiShoppingBag3Fill />}
          />
          <Button
            roundedFull
            name="Favourites"
            fullWidth
            transparent
            icon={<RiHeart2Fill />}
          />
        </div>
        {/* Details*/}
        <div className="mt-14">
          <h3 className="text-xl">{props.description}</h3>
          <ul className="mt-10 list-inside list-disc">
            <li>Color Shown: {props.colors}</li>
            <li>Style: DZ4353-007</li>
          </ul>
          <div className="underline mt-10 w-2/6">View Product Details</div>
          {/* break line */}
          <div className="border border-[#A0A0A0] my-8"></div>
          {/* Delivery starts */}
          <div className="flex flex-col">
            <div className="flex justify-between my-auto">
              <h4>Delivery & Returns</h4>
              <button href="" onClick={delivery}>
                <BsChevronDown />
              </button>
            </div>
            <AnimatePresence>
              {deli && (
                <motion.div
                  variants={hideShowAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition="transition"
                >
                  <p className="mt-8">
                    All purchases are subject to delivery fees. <br />• Standard
                    delivery 4-9 business days Orders are processed and
                    delivered Monday - Friday (excluding public holidays) Nike
                    Members enjoy free returns.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Delivery ends */}
          {/* break line */}
          <div className="border border-[#A0A0A0] mt-8 mb-5"></div>
          {/* Reviews */}
          <div className="flex flex-col gap-2">
            {/* main rating */}
            <div className="flex justify-between">
              <div className="text-2xl font-medium">Reviews{props.reviews}</div>
              <div className="flex items-center gap-1">
                {/* connect proper data here */}
                {[1, 2, 3, 4].map((i) => {
                  return (
                    <>
                      <AiFillStar key={i} size={24} className="text-primary" />
                    </>
                  );
                })}

                <AiOutlineStar size={24} className="text-primary" />

                <button href="" onClick={Rev}>
                  <BsChevronDown />
                </button>
              </div>
            </div>
            {/* Sub rating */}
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => {
                  return (
                    <>
                      <IconContext.Provider
                        value={{
                          color: "#F37937",
                          className: "global-class-name",
                          size: "20px",
                        }}
                      >
                        <div>
                          <AiFillStar key={i} />
                        </div>
                      </IconContext.Provider>
                    </>
                  );
                })}
                <IconContext.Provider
                  value={{
                    color: "#F37937",
                    className: "global-class-name",
                    size: "20px",
                  }}
                >
                  <div>
                    <AiOutlineStar />
                  </div>
                </IconContext.Provider>
                <div className="text-[Mukta-Vaani] text-xl ml-6">
                  {props.stars} Stars
                </div>
              </div>
            </div>
            <div className="underline mt-1 w-2/6">Write a review</div>
          </div>
          {/* review details */}
          <AnimatePresence>
            {rev && (
              <motion.div
                variants={hideShowAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
              >
                {review.map((items, index) => (
                  <>
                    <div className="flex flex-col gap-2 mt-4" key={index}>
                      <div className="text-[Mukta-Vaani] text-xl">
                        {items.topic}
                      </div>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4].map((i) => {
                            return (
                              <>
                                <IconContext.Provider
                                  value={{
                                    color: "#F37937",
                                    className: "global-class-name",
                                    size: "20px",
                                  }}
                                >
                                  <div>
                                    <AiFillStar key={i} />
                                  </div>
                                </IconContext.Provider>
                              </>
                            );
                          })}
                          <IconContext.Provider
                            value={{
                              color: "#F37937",
                              className: "global-class-name",
                              size: "20px",
                            }}
                          >
                            <div>
                              <AiOutlineStar />
                            </div>
                          </IconContext.Provider>
                        </div>
                        <div className="text-[Mukta-Vaani] text-[#A0A0A0] text-xl">
                          {items.name} - {items.date}
                        </div>
                      </div>
                      <div className="text-[Mukta-Vaani] text-xl font-[400]">
                        {items.review}
                      </div>
                      <div className="underline mt-1 w-2/6">More</div>
                      <div className="border border-[#A0A0A0] mt-8 mb-5"></div>
                    </div>
                  </>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border border-[#A0A0A0] my-8 mb-5"></div>
          {/* Product Information */}
          <div className="flex flex-col">
            <div className="flex justify-between my-auto">
              <h4>Product Information</h4>
              <button onClick={Info}>
                <BsChevronDown />
              </button>
            </div>
            <AnimatePresence>
              {info && (
                <motion.div
                  variants={hideShowAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition="transition"
                >
                  <p>
                    <p className="text-[14px]">
                      Declaration of Importer: Direct import by the individual
                      customer
                    </p>
                    <br />
                    Marketed by: Nike Global Trading B.V. Singapore Branch,30
                    Pasir Panjang Road, #10-31/32, Mapletree Business City,
                    Singapore 117 440
                  </p>
                  <p className="font-extrabold text-xl mt-5">
                    Net Quantity : {props.stock}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProductDetails;
