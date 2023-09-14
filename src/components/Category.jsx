import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "./Button";
import { Star, colorstar, plus } from "../assets/icons";
import { womenscat, menscat, kidscat } from "../assets/Images";

const cat = [
  { name: "card1", img: womenscat, btnname: "Women's", id: 1 },
  { name: "card2", img: menscat, btnname: "Mens", id: 2 },
  { name: "card3", img: kidscat, btnname: "Kids", id: 3 },
];

const Cards = (props) => {
  console.log(props);
  return (
    <>
      <div className="w-1/3 h-full">
        <div id={props.id}>
          <img src={props.img} alt={props.name} />
        </div>
        <div className="mt-4 text-center">
          <Button name={props.btnname} roundedFull transparent />
        </div>
      </div>
    </>
  );
};

const Category = () => {
  return (
    <>
      <div className="flex flex-row gap-5 mx-36 mt-44 mb-56 h-4/5">
        {cat.map((card, i) => {
          return (
            <Cards
              name={card.name}
              img={card.img}
              key={i}
              btnname={card.btnname}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Category, "category");
