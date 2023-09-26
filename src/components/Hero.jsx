import "../App.css";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "./Button";
import ShoeCard from "./ShoeCard";
import { cards } from "../constants";
import { Shoe } from "../assets/Images";
import Circle from "./Circle";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showCard, setShowCard] = useState("");
  console.log(showCard);
  return (
    <>
      {/* main div starts here */}
      <div className="max-xl:flex-wrap flex justify-center items-center mt-4">
        {/* column 1 starts here */}
        <div className="xl:w-1/2 md:h-auto h-auto max-xl:order-2 w-full">
          <h1 className="text-Text-Primary text-6xl mb-4">NIKE AIR MAX</h1>
          <h2 className="text-primary text-4xl mt-4 mb-4">Max series</h2>
          <p className="text-Text-Secondary text-lg mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur. Orci proin pretium dui sed
            nibh integer. Viverra arcu et habitasse vel in morbi diam.
            Adipiscing scelerisque enim nulla augue elit eu vulputate leo id.
            Interdum sed nulla ut purus. Tincidunt at maecenas leo ut blandit
            varius porttitor id. Mi eget risus et amet.
          </p>
          {/* Price section */}
          <div className="flex flex-row justify-start items-center mt-10 gap-4">
            <p className="text-5xl me-4">$ 299</p>
            <Button name={"Buy Now"} roundedFull />
          </div>
          {/* Price section ends here */}
          {/* Shoe card */}
          <div className="flex gap-8 mt-8">
            {cards.map((card, i) => {
              return (
                <ShoeCard
                  name={card.name}
                  description={card.description}
                  rate={card.rate}
                  img={card.img}
                  id={i}
                  key={i}
                  setShowCard={setShowCard}
                />
              );
            })}
          </div>
          {/* Shoe card ends here */}
        </div>
        {/* column 1 ends here */}
        {/* column 2 starts here */}
        <div className="xl:w-1/2 w-full flex h-screen justify-center items-center relative xl:-translate-y-20 xl:ms-20 overflow-hidden">
          {/* circle */}
          <Circle position={"under-shoe"} />
          {/* circle end */}
          {/* animation */}
          {showCard === "" && (
            <motion.img
              src={Shoe}
              alt="Shoe"
              className="w-full h-full max-xl:order-1 object-cover object-center "
              initial={{ opacity: 0, x: -100, rotate: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
            />
          )}
          {showCard === "/src/assets/Images/footwear_1.png" && (
            <motion.img
              src={Shoe}
              alt="Shoe"
              className="w-full h-full max-xl:order-1 object-cover object-center "
              initial={{ opacity: 0, x: -100, rotate: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
            />
          )}
          {showCard === "/src/assets/Images/footwear_2.png" && (
            <motion.img
              src={showCard}
              alt="Shoe"
              className="w-full h-full max-xl:order-1 object-cover object-center "
              initial={{ opacity: 0, x: -100, rotate: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
            />
          )}
          {showCard === "/src/assets/Images/footwear_3.png" && (
            <motion.img
              src={showCard}
              alt="Shoe"
              className="w-full h-full max-xl:order-1 object-cover object-center "
              initial={{ opacity: 0, x: -100, rotate: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
            />
          )}
          {/* animation end */}
          <div className="absolute text-[200px] text-right z-[-3] right-0 top-8 text-primary/25">
            <div className="tracking-[20px]">JUST</div>
            <div className="tracking-[20px]">DO</div>
            <div className="tracking-[20px]">IT</div>
          </div>
        </div>
        {/* column 2 ends here */}
      </div>
      {/* main div ends here */}
    </>
  );
};

export default SectionWrapper(Hero, "");
