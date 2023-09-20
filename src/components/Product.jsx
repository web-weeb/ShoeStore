import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import MPV_collection from "./MPV_collection";
import NIKE_TECH from "./NIKE_TECH";
import MYNTG from "./MYNTG";
import Essential_collection from "./Essential_collection";

const Product = () => {
  return (
    <>
      {/*Main product section starts here*/}
      <div className="flex flex-col gap-10">
        <div>
          {/* MVP COLLECTION */}
          <MPV_collection />
        </div>
        <div>
          {/* NIKE TECH */}
          <NIKE_TECH />
        </div>
        <div>
          {/* MEET YOUR NEW TRAIL GUIDES*/}
          <MYNTG />
        </div>
        <div>
          {/* ESSENTIAL COLLECTION */}
          <Essential_collection />
        </div>
      </div>
      {/* Main product section ends here */}
    </>
  );
};

export default SectionWrapper(Product, "product");
