import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const ShoeCard = (props) => {
  return (
    <>
      <div
        className="relative w-44 h-32 p-5 mt-16 rounded-3xl shadow-hero-card"
        id={props.id}
      >
        {/* image start */}
        <div className="absolute pt-1 h-40 w-40 -top-full -left-0 translate-y-1/4 scale-150">
          <img src={props.img} alt="shoe" />
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
          <div className="price">$180</div>
        </div>
        {/* foot wear details end*/}
      </div>
    </>
  );
};

export default ShoeCard;
