import Button from "./Button";
import { productMYNTG } from "../constants/index";
import { motion } from "framer-motion";

const MYNTG = () => {
  return (
    <>
      <div className="min-h-screen max-w-[1274px] mx-auto">
        <h4 className="mr-auto mb-6">The Latest</h4>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1">
          {productMYNTG.map((item, index) => (
            <motion.img
              src={item.img}
              alt={item.name}
              key={index}
              className="w-full h-80"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-5xl text-center font-bold mt-6">
            MEET YOUR NEW TRAIL GUIDES
          </h1>
          <h5 className="text-primary">
            No matter the terrain, Nike Trail keeps you on the move.
          </h5>
        </div>
        <div className="flex justify-center py-6">
          <Button name="MORE" roundedFull small />
        </div>
      </div>
    </>
  );
};

export default MYNTG;
