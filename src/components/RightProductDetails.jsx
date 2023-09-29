import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { productDetailsimg, sbtn, review } from "../constants";
import Button from "./Button";
import sort from "../assets/icons/sort-icon.svg";
import { RiHeart2Fill, RiShoppingBag3Fill } from "react-icons/ri";

const RightProductDetails = () => {
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
        <h4 className="text-[32px]">Jordan Max Aura 5</h4>
        <h5 className="text-[28px]">Men’s Shoes</h5>
        <h5 className="text-[28px]">MRP : {formatCurrency(13450)}</h5>
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
          <div className="grid grid-cols-7 gap-1 mt-2">
            {sbtn.map((item, index) => (
              <Button key={index} name={item.size} transparent fullWidth noRounded offShadow />
            ))}
          </div>
        </div>
        {/* Two Buttons */}
        <div className="grid grid-row-2 gap-4 mt-8">
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
          <h3 className="text-xl">
            When you need a shoe that's ready 24/7, it's gotta be the Max Aura
            5. Inspired by the AJ3, this pair of kicks puts a modern spin on the
            classic. They're made from durable leather and textiles that sit
            atop a heel of Nike Air cushioning so you can walk, run or skate all
            day and still have fresh feeling soles.
          </h3>
          <ul className="mt-10 list-inside list-disc">
            <li>Color Shown: Cement Grey/ Topaz</li>
            <li>Gold/White/Anthracite</li>
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
                <img src={sort} alt="" />
              </button>
            </div>
            <div
              className={`my-8 text-[Mukta-Vaani] ${deli ? "flex" : "hidden"}`}
            >
              <p>
                All purchases are subject to delivery fees. <br />• Standard
                delivery 4-9 business days Orders are processed and delivered
                Monday - Friday (excluding public holidays) Nike Members enjoy
                free returns.
              </p>
            </div>
          </div>
          {/* Delivery ends */}
          {/* break line */}
          <div className="border border-[#A0A0A0] mt-8 mb-5"></div>
          {/* Reviews */}
          <div className="flex flex-col gap-2">
            {/* main rating */}
            <div className="flex justify-between">
              <div className="text-[Prompt] text-4xl font-normal">
                Reviews(10)
              </div>
              <div className="flex items-center gap-1">
                {/* connect proper data here */}
                {[1, 2, 3, 4].map((i) => {
                  return (
                    <>
                      <IconContext.Provider
                        value={{
                          color: "#F37937",
                          className: "global-class-name",
                          size: "30px",
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
                    size: "30px",
                  }}
                >
                  <div>
                    <AiOutlineStar />
                  </div>
                </IconContext.Provider>
                <button href="" onClick={Rev}>
                  <img src={sort} alt="" />
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
                  {review[0].rate} Stars
                </div>
              </div>
            </div>
            <div className="underline mt-1 w-2/6">Write a review</div>
          </div>
          {/* review details */}
          <div className={`${rev ? "flex flex-col" : "hidden"}`}>
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
          </div>
          <div className="border border-[#A0A0A0] my-8 mb-5"></div>
          {/* Product Information */}
          <div className="flex flex-col">
            <div className="flex justify-between my-auto">
              <h4>Product Information</h4>
              <button href="" onClick={Info}>
                <img src={sort} alt="" />
              </button>
            </div>
            <div
              className={`my-8 text-[Mukta-Vaani] ${
                info ? "flex flex-col" : "hidden"
              }`}
            >
              <p>
                <span className="text-[12px]">
                  Declaration of Importer: Direct import by the individual
                  customer
                </span>
                <br />
                Marketed by: Nike Global Trading B.V. Singapore Branch,30 Pasir
                Panjang Road, #10-31/32, Mapletree Business City, Singapore 117
                440
              </p>
              <p className="font-extrabold text-xl mt-5">
                Net Quantity : 1 pair
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProductDetails;
