import { womenscat, menscat, kidscat } from "../assets/Images";
import { Button } from "../components";

const cat = [
  { name: "card1", img: womenscat, btnname: "Women's", id: 1 },
  { name: "card2", img: menscat, btnname: "Mens", id: 2 },
  { name: "card3", img: kidscat, btnname: "Kids", id: 3 },
];

const Cards = (props) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-1/3 h-full p-4">
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
      <section className="mx-auto px-8 max-w-[1440px] py-12 " id="category">
        <div className="flex items-center max-lg:flex-wrap justify-center mx-16 min-h-screen max-w-7xl">
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
      </section>
    </>
  );
};
export default Category;
