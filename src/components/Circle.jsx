const Circle = ({ position }) => {
  return (
    <div
      className={`circle absolute h-[360px] w-[360px] -z-10 ${
        position === "under-shoe" &&
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      }
      ${
        position === "top-left" &&
        "-top-16 -left-[6%] -translate-x-1/2 -translate-y-1/2"
      }  ${
        position === "bottom-left" && "-bottom-1/2 -left-1/4 translate-x-1/4"
      }
      `}
    ></div>
  );
};

export default Circle;
