import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="">
      <div className="flex gap-5 justify-center items-center mr-12">
        <button
          onClick={() => setDecrease()}
          className="border-black border-2 rounded-full w-6 h-6 flex justify-center items-center"
        >
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button
          onClick={() => setIncrease()}
          className="border-black border-2 rounded-full w-6 h-6 flex justify-center items-center"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;