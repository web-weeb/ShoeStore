import React from "react";
import { footitems1, footitems2, footitems3 } from "../constants/index";
import Footcards from "./Footcards";
import { FaLocationDot, FaFacebookF, FaInstagram } from "react-icons/fa6";
import {FiYoutube} from "react-icons/fi";
import {BiLogoPlayStore} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      {/* Parent div starts here */}
      <div className="flex flex-col bg-[#111111] sl:px-36 max-sl:px-20 max-md:px-10">
        {/* Upper section starts here*/}
        <div className="flex justify-between my-10">
          {/* Left Upper */}
          <div className="flex md:gap-10 sl:gap-20 gap-5">
            <Footcards data={footitems1} upper />
            <Footcards data={footitems2} />
            <Footcards data={footitems3} />
          </div>
          {/* Right Upper */}
          <div className="flex gap-5 max-lg:flex-col">
            {[
              <FaFacebookF />,
              <FaInstagram />,
              <FiYoutube />,
              <BiLogoPlayStore />,
            ].map((items, index) => (
              <>
                <div className="h-10 w-10 bg-slate-500 rounded-full cursor-pointer flex justify-center items-center">
                  {items}
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Upper section ends here*/}
        {/* Lower section starts here*/}
        <div className="flex max-sl:flex-col-reverse max-sl:items-center max-sl:gap-4 sl:justify-between font-[Mukta_Vaani] pb-5 ">
          <div className="flex gap-2 sl:gap-4 items-center">
            <h4 className="flex gap-2 text-white text-sm md:text-lg lg:text-xl">
              <FaLocationDot />
              BHARAT
            </h4>
            <div className="text-[#938f8f] max-xs:text-[8px] md:text-[0.8rem] lg:text-lg">
              ©2023 WEBWEEB, Inc. All Rights Reserved
            </div>
          </div>
          <div className="flex gap-2 md:gap-4">
            {[
              { des: "Guides" },
              { des: "Terms of Sale" },
              { des: "Terms of Use" },
            ].map((items, index) => (
              <>
                <h6 className="text-white cursor-pointer text-[0.8rem] md:text-sm lg:text-lg">
                  {items.des}
                </h6>
              </>
            ))}
          </div>
        </div>
        {/* Lower section ends here*/}
      </div>
      {/* Parent div ends here */}
    </>
  );
};

export default Footer;
