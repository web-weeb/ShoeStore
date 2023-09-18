import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "./Button";
import { productMYNTG, cardsCollection } from "../constants/index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardsCollection = (props) =>{
  return (
    <>
      <div className="h-[400px] w-[400px]">
        <img
          src={props.src}
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
    </>
  );
}

const Product = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.2,
  });
  return (
    //Main product section starts here
    <div className="flex flex-col">
      {/* MVP COLLECTION */}
      <div>{/* Sayan's div */}</div>
      {/* NIKE TECH */}
      <div>{/* Subhojits's div */}</div>
      {/* MEET YOUR NEW TRAIL GUIDES*/}
      <div className="flex flex-col justify-center items-center gap-14 min-h-screen w-[1274px] mx-auto ">
        <p className="mr-auto">The Latest</p>
        <div className="grid grid-cols-4 gap-1">
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
      <div className="flex flex-col justify-center items-center first:items-start gap-14 min-h-screen w-[1274px] mx-auto">
        <div className="grid grid-cols-3 gap-10">
          {cardsCollection.map((item, index) => (
            <CardsCollection src={item.img} key={index} />
          ))}
        </div>
        <div className="h-[92px] flex flex-col justify-center items-center gap-6">
          <h1 className="text-5xl font-bold">ESSENTIAL COLLECTIONS</h1>
          <h5 className="text-primary">Essential itmes for your daily life.</h5>
        </div>
        <div>
          <Button name="MORE" roundedFull small />
        </div>
      </div>
    </div>
    //Main product section ends here
  );
};

export default SectionWrapper(Product, "product");
