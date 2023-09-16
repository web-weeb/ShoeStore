const Circle = ({ position }) => {
  return (
    <div
      className={`circle absolute h-[250px] w-[250px] lg:scale-[3] scale-150 -z-10 ${
        position === "under-shoe" &&
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      }
      ${
        position === "top-left" &&
        "top-0 left-0 -translate-x-1/2 -translate-y-[80%]"
      }  ${
        position === "bottom-left" &&
        "bottom-0 left-0 !w-[300px] -translate-x-3/4 translate-y-1/3"
      }
      `}
    ></div>
  );
};

export default Circle;
