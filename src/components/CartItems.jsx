import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { FaRemoveFormat } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { Pointer } from 'lucide-react';
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from '../store/cart';

const CartItems = ({_id, name, imageFiles, color, price, amount}) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
  return (
    <div className="container mx-10 border-b-2 border-black mt-2 my-10 w-auto">
      <div className="cart-heading grid grid-cols-5 gap-4 items-center border-b border-gray-300 py-4">
        {/* Image and Name */}
        <div className="flex items-center">
          <div className="md:w-72 md:h-auto w-16 h-16 rounded-full">
            <img
              src={imageFiles}
              alt={_id}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">{name}</p>
            <div className="color-div flex items-center">
              <p className="mr-2">Color:</p>
              <div
                className="color-style w-6 h-6 rounded-full"
                style={{ backgroundColor: color, border: `2px solid ${color}` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex gap-5 justify-center items-center mr-16">
          <p className="text-lg">
            <FormatPrice price={price} />
          </p>
        </div>

        {/* Quantity */}

        {/* Subtotal */}
        <div className="flex justify-center items-center">
          <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(_id + color)}
            setIncrease={() => setIncrement(_id + color)}
          />
        </div>
        <div className="flex gap-5 justify-center items-center ml-12">
          <p className="text-lg">
            <FormatPrice price={price * amount} />
          </p>
        </div>
        {/* Remove Icon */}
        <div className="flex gap-5 justify-center items-center ml-32">
          <button>
            <AiFillDelete size={24} color="red" cursor="pointer" onClick={()=> removeItem(_id)}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems