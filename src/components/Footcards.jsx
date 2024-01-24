const Footcards = (props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {props.data.map((items, index) => (
          <h6
            key={index}
            className={`${
              items.color ? "text-white" : "text-[#938f8f]"
            } font-[Mukta_Vaani] ${
              props.upper ? "uppercase" : "normal-case"
            } cursor-pointer`}
          >
            {items.des}
          </h6>
        ))}
      </div>
    </>
  );
};

export default Footcards;