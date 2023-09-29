import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Link
// roundedFull
// small
// fullWidth
// transparent
// icon

const Button = (props) => {
  return (
    <Link
      to={props.link && props.link}
      className={`${props.fullWidth ? "w-full" : null}`}
    >
      <motion.button
        className={`relative shadow-btn py-2 z-10 overflow-hidden group border-[2px] border-primary ${
          props.roundedFull ? "rounded-full" : "rounded-xl"
        } ${props.small ? "px-8 text-sm" : "px-10 text-lg"}
        ${props.fullWidth ? "w-full" : null}
        ${props.offShadow ? "!shadow-none" : null}
        ${props.noRounded ? "!rounded-none" : null}`}

        onClick={props.onClick && props.onClick}
      >
        <div
          className={`absolute w-full h-full top-0 duration-300 ${
            props.transparent
              ? "bg-primary left-full group-hover:left-0"
              : "bg-primary left-0 group-hover:left-full"
          }`}
        ></div>
        <div
          className={`relative flex gap-2 items-center justify-center ${
            props.transparent
              ? "text-primary group-hover:text-white"
              : "text-white group-hover:text-primary"
          }`}
        >
          {props.name}
          {props.icon}
        </div>
      </motion.button>
    </Link>
  );
};

export default Button;
