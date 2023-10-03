import { Circle, ShoeCard, Button } from "../components";
import { cards } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { Shoe } from "../assets/Images";

const Home = () => {
  const [showCard, setShowCard] = useState("");
  console.log(showCard);
  return (
    <>
      <section
        className="min-h-screen justify-center flex items-center relative max-w-[1440px] mx-auto px-4 sm:py-6 max-sm:pb-6"
        id="Home"
      >
        <Circle position={"top-left"} />
        <Circle position={"bottom-left"} />
        {/* main div starts here */}
        <div className="max-xl:flex-wrap flex justify-center items-center mt-4">
          {/* column 1 starts here */}
          <div className="xl:w-1/2 md:h-auto h-auto max-xl:order-2 w-full xl:ps-16 lg:px-8 sm:ps-4">
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
            <div className="flex justify-start items-center mt-10 gap-4">
              <p className="text-5xl me-4">$ 299</p>
              <Button name={"Buy Now"} roundedFull />
            </div>
            {/* Price section ends here */}
            {/* Shoe card */}
            <div className="flex max-sm:justify-center gap-8 max-lg:flex-wrap mt-8">
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
          <div className="xl:w-1/2 w-full flex justify-center items-center relative xl:-translate-y-20 xl:ms-20 max-2xl:overflow-hidden">
            {/* circle */}
            <Circle position={"under-shoe"} />
            {/* circle end */}
            {/* animation */}

            <motion.img
              key={showCard}
              src={showCard ? showCard : Shoe}
              alt="Shoe"
              className="w-full h-full max-xl:order-1 object-cover object-center max-md:scale-150"
              initial={{ opacity: 0, x: -100, rotate: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -100 }}
            />

            {/* animation end */}
            <div className="absolute text-right z-[-3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/25 flex flex-col justify-end">
              <div className="tracking-[20px] font-semibold montserrat sm:text-[12rem] xs:text-[8rem] text-[5rem] sm:mt-10">
                JUST
              </div>
              <div className="tracking-[20px] font-semibold montserrat sm:text-[12rem] xs:text-[8rem] text-[5rem]">
                DO
              </div>
              <div className="tracking-[20px] font-semibold montserrat sm:text-[12rem] xs:text-[8rem] sm:-mt-10 text-[5rem]">
                IT
              </div>
            </div>
          </div>
          {/* column 2 ends here */}
        </div>
        {/* main div ends here */}
      </section>
    </>
  );
};

export default Home;
