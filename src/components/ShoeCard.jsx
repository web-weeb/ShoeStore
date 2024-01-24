//TODO: create a card component for the shoe
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ShoeCard = (props) => {
  // console.log(props);
  if (!props) return <p>loading</p>;
  return (
    <div
      className="relative w-44 h-[8.5rem] p-5 mt-16 rounded-3xl shadow-hero-card bg-[#fafafa]"
      id={props.id}
    >
      {/* image start */}
      <div className="absolute pb-2 h-40 w-40 -top-full -left-0 translate-y-1/4 scale-150 overflow-hidden">
        <img
          src={props.img}
          alt="shoe"
          onClick={() => {
            props.setShowCard(props.img);
          }}
          className="cursor-pointer w-full h-full object-cover object-center rotate-[-15deg]"
        />
      </div>
      {/*  image end */}
      {/* foot wear details start*/}
      <div className="flex h-full items-end">
        <div className="mr-5">
          <h4 className="text-xs">{props.name}</h4>
          <h4 className="text-xs font-bold text-primary">
            {props.description}
          </h4>
          <div className="flex">
            {[1, 2, 3, 4].map((i) => {
              return <AiFillStar id={i} size={10} key={i} />;
            })}
            <AiOutlineStar size={10} />
          </div>
        </div>
        <div className="price text-sm">
          <FormatPrice price={props.price} />
        </div>
      </div>
      <Link to={`/product/${props.id}`}>
        <div className="absolute -right-3 -bottom-4 rounded-full">
          <RiAddCircleFill size={44} />
        </div>
      </Link>
      {/* foot wear details end*/}
    </div>
  );
};

export default ShoeCard;
