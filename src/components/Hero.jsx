import "../App.css";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "./Button";
import ShoeCard from "./ShoeCard";
import { cards } from "../constants";
import { Shoe } from "../assets/Images";
import Circle from "./Circle";
const Hero = () => {
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
          <img
            src={Shoe}
            alt="Shoe"
            className="w-full h-full max-xl:order-1 object-cover object-center -rotate-[15deg]"
          />
        </div>
        {/* column 2 ends here */}
      </div>
      {/* main div ends here */}
    </>
  );
};

export default SectionWrapper(Hero, "");
