import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Link
// roundedFull
// small
// fullWidth
// transparent

const Button = (props) => {
  return (
    <Link
      to={props.link && props.link}
      className={`ms-4 ${props.fullWidth ? "w-full" : null}`}
    >
      <motion.button
        className={`relative py-2 z-10 overflow-hidden group border-[2px] border-primary ${
          props.roundedFull ? "rounded-full" : "rounded-xl"
        } ${props.small ? "px-8 text-sm" : "px-10 text-lg"}
        ${props.fullWidth ? "w-full" : null}`}
      >
        <div
          className={`absolute w-full h-full top-0 duration-300 ${
            props.transparent
              ? "bg-primary left-full group-hover:left-0"
              : "bg-primary left-0 group-hover:left-full"
          }`}
        ></div>
        <div
          className={`relative ${
            props.transparent
              ? "text-primary group-hover:text-white"
              : "text-white group-hover:text-primary"
          }`}
        >
          {props.name}
        </div>
      </motion.button>
    </Link>
  );
};

export default Button;
