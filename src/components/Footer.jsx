import React from "react";
import { footitems1, footitems2, footitems3 } from "../constants/index";
import Footcards from "./Footcards";


const Footer = () => {
  return (
    <>
      {/* Parent div starts here */}
      <div className="flex flex-col bg-[#111111] px-40 mx-8">
        {/* Upper section starts here*/}
        <div className="flex justify-between my-10">
          {/* Left Upper */}
          <div className="flex gap-20">
            <Footcards data={footitems1} upper />
            <Footcards data={footitems2} />
            <Footcards data={footitems3} />
          </div>
          {/* Right Upper */}
          <div className="flex gap-5">
            {[1, 2, 3, 4].map((items, index) => (
              <>
                <div className="h-10 w-10 bg-slate-500 rounded-full cursor-pointer"></div>
              </>
            ))}
          </div>
        </div>
        {/* Upper section ends here*/}
        {/* Lower section starts here*/}
        <div className="flex justify-between font-[Mukta_Vaani] pb-5">
          <div className="flex gap-4 items-center">
            <h4 className="text-white">BHARAT</h4>
            <p className="text-[#938f8f]">
              © 2023 WEBWEEB,Inc. All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            [{[{des:"Guides"},{des:"Terms of Sale"},{des:"Terms of Use"}].map((items,index)=>(
              <>
              <h6 className="text-white cursor-pointer">{items.des}</h6>
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
