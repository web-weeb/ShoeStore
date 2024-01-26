import React, { useState } from 'react'
import Button from './Button';
import { RiCheckFill, RiHeart2Fill, RiShoppingBag3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../store/cart';

const AddToCard = ({product}) => {
    const { addToCart } = useCartContext();
    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <>
      <div className="grid grid-row-2 max-xl:max-w-xs gap-4 mt-8 max-xl:ms-auto">
        <Button
          roundedFull
          name="Favourites"
          fullWidth
          transparent
          icon={<RiHeart2Fill />}
        />
        <NavLink to="/card" onClick={() => addToCart(id, color, amount, product)}>
          <Button
            roundedFull
            name="Add to bag"
            fullWidth
            icon={<RiShoppingBag3Fill />}
          />
        </NavLink>
      </div>
      {/* Details*/}
      <div className="mt-4">
        <ul className="mt-10 list-inside list-disc">
          <li>
            Color Shown:
            {colors.map((curcolor, index) => {
              return (
                <button
                  key={index}
                  className={
                    colors === curcolor
                      ? "mx-1 rounded-full w-4 h-4 border-4 border-b-orange-500"
                      : "mx-1 rounded-full w-4 h-4"
                  }
                  style={{ backgroundColor: curcolor }}
                  onClick={() => setColor(curcolor)}
                >
                  {color === curcolor ? <RiCheckFill /> : null}
                </button>
              );
            })}
          </li>
          <li>Style: DZ4353-007</li>
        </ul>
      </div>
    </>
  );
}

export default AddToCard