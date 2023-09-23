import React from "react";
import Button from "./Button";
import { productMYNTG} from "../constants/index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const MYNTG = () => {
    const [ref, inView] = useInView({
      triggerOnce: false, // Trigger the animation only once
      threshold: 0.2,
    });
    return(
        <>
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
        </>
    );
};

export default MYNTG;