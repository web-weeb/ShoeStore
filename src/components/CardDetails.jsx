import React from 'react'
import { useCartContext } from '../store/cart'
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import CartItems from './CartItems';

const CardDetails = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if(cart.length === 0){
    return (
      <>
        <div className="flex justify-center items-center p-60 gap-6">
          <h1>no cart in item</h1>
          <NavLink to="/products">
            <Button name="Continue Shopping" roundedFull />
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-10 border-b-2 border-black mt-16 my-10 w-auto">
      <div className="flex justify-center items-center gap-64 ">
        <p className="font-bold">Item</p>
        <p className="hidden md:block font-bold">Price</p>
        <p className="font-bold">Quantity</p>
        <p className="hidden md:block font-bold">Subtotal</p>
        <p className="font-bold">Remove</p>
      </div>
      <hr className="my-4" />
      <div>
        {cart.map((curElem) => {
          return <CartItems key={curElem._id} {...curElem} />;
        })}
      </div>
      <hr className="my-6" />
      <div className="flex justify-between items-center mb-4">
        <NavLink to="/products">
          <Button name="Continue Shopping" roundedFull />
        </NavLink>
        <button onClick={clearCart}>
          <Button name="Clear Cart" roundedFull />
        </button>
      </div>

      {/* Order total_amount */}
      <div className="order-total--amount mt-6">
        <div className="order-total--subdata bg-gray-100 p-6 rounded-md shadow-md">
          <div className="mb-4">
            <div>
              <p className="text-lg font-semibold">Subtotal:</p>
              <p className="text-gray-600">
                {<FormatPrice price={total_price} />}
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold mt-2">Shipping Fee:</p>
              <p className="text-gray-600">
                {<FormatPrice price={shipping_fee} />}
              </p>
            </div>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Order Total:</p>
              <p className="text-gray-600">
                {<FormatPrice price={total_price + shipping_fee} />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails