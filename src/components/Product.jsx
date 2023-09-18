import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "./Button";
import { productMYNTG } from "../constants/index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { mvpData } from "../constants/index";
import { nikeTechData } from "../constants/index";
const Product = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.2,
  });
  return (
    //Main product section starts here
    <div className="flex flex-col">
      {/* MVP COLLECTION */}
      <div>{/* Sayan's div */
        <>
          <p>Don't miss</p>
          <div className="grid grid-cols-2 gap-0">
            {mvpData.map((item, index) => (
              <img className="w-[100%] h-[100%]" src={item.url} alt="" />
            ))}

          </div>
            <h1 title="hello" className="text-center mt-10">MVP COLLECTION</h1>
          <p className="text-primary text-center">Elevate your look with our MVP collection - a striking blend of bold colors and classic styles</p>
          <div className="flex justify-center my-10"><Button name={"More"} roundedFull /></div>
        </>
        
      }</div>
      {/* NIKE TECH */
        <>
        <p>Featured</p>
          <div className="grid grid-cols-3 gap-0">
            {nikeTechData.map((item, index) => (
              <img key={index} className="w-[80%] h-[100%]" src={item.url} alt="" />
            ))}

          </div>
          <h1 className="text-center mt-10">NIKE TECH</h1>
          <p className="text-primary text-center">Elevate your look with our MVP collection - a striking blend of bold colors and classic styles</p>
          <div className="flex justify-center my-10"><Button name={"More"} roundedFull /></div>
        </>
      }
      <div>{/* Subhojits's div */}</div>
      {/* MEET YOUR NEW TRAIL GUIDES*/}
      <div className="flex flex-col justify-center items-center gap-14 min-h-screen">
        {/* Purbarun's Div */}
        <div className="w-[1274px] grid grid-cols-4 gap-1">
          {productMYNTG.map((item, index) => (
            <motion.img
              src={item.img}
              alt={item.name}
              key={index}
              className="w-full h-80"
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 * index }}
            />
          ))}
        </div>
        <div className="h-[92px] flex flex-col justify-center items-center gap-6">
          <h1 className="text-5xl font-bold">MEET YOUR NEW TRAIL GUIDES</h1>
          <h5 className="text-primary">
            No matter the terrain, Nike Trail keeps you on the move.
          </h5>
        </div>
        <div>
          <Button name="MORE" roundedFull small />
        </div>
      </div>
      <div>{/*Purbarun's Div*/}</div>
    </div>
    //Main product section ends here
  );
};

export default SectionWrapper(Product, "product");
