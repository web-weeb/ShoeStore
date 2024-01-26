import { SlidersHorizontal } from "lucide-react";
import { filter, sort } from "../assets/icons";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useFilterContext } from "../store/filter";
import { FaCheck, FaSearchDollar } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import Button from "./Button";
import { RiCheckDoubleFill, RiCheckFill, RiShoppingBag2Fill } from "react-icons/ri";
import { AiFillFilter } from "react-icons/ai";
const Product_Filter = () => {

  const {
    filter_products,
    all_products,
    sorting,
    filters: { text, color, price, minPrice, maxPrice },
    updateFilterValue,
    totalProducts,
    clearFilters,
  } = useFilterContext();

    const getUniqueData = (data, attr) => {
      let newVal = data.map((curElem) => {
        return curElem[attr];
      });

      if (attr === "colors") {
        newVal = newVal.flat();
      }
      return (newVal = ["all", ...new Set(newVal)]);
    };

  const colorsData = getUniqueData(all_products, "colors");

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {/* Product_Filter start  */}
      <div className="flex relative z-10 justify-between p-4 mx-6">
        {/* text start  */}
        <div className="flex w-auto">
          <h2 className="text-2xl">Total Shoes ({totalProducts})</h2>
        </div>
        {/* text end  */}
        {/* Product_Filter items start */}
        <div className="p-2 flex">
          <ul className="hidden md:flex gap-14 items-center text-sm">
            <div className="relative">
              <li
                className="flex justify-center items-center gap-2"
                onClick={toggleDropdown}
              >
                <h4 className="text-xl">Show Filters</h4>
                <button>
                  <SlidersHorizontal size={20} />
                </button>
              </li>

              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 w-72 bg-slate-200 border rounded shadow-xl shadow-slate-300">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      name="text"
                      placeholder="Search"
                      className="w-full border-2 border-red-300 rounded-md p-2"
                      value={text}
                      onChange={updateFilterValue}
                    />
                  </form>
                  <div className="border-b-2 border-black mt-4"></div>
                  <div className="mt-4">
                    <h4 className="text-xl mb-4">Colors</h4>
                    {colorsData.map((curColor, index) => {
                      if (curColor === "all") {
                        return (
                          <button
                            type="button"
                            key={index}
                            name="color"
                            value={curColor}
                            onClick={updateFilterValue}
                            // style={{ backgroundColor: curColor }}
                            className="w-6 h-6 rounded-full ml-2  m-2 underline"
                          >
                            All
                          </button>
                        );
                      }
                      return (
                        <button
                          type="button"
                          key={index}
                          name="color"
                          value={curColor}
                          onClick={updateFilterValue}
                          style={{ backgroundColor: curColor }}
                          className="w-6 h-6 rounded-full ml-2"
                        >
                          {color === curColor ? <RiCheckFill size={24} /> : null}
                        </button>
                      );
                    })}
                  </div>
                  <div className="border-b-2 border-black mt-4"></div>
                  <div className="mt-4">
                    <h3 className="text-2xl">Price</h3>
                    <p className="mt-2">
                      <FormatPrice price={price} />
                    </p>
                    <input
                      type="range"
                      name="price"
                      min={minPrice}
                      max={maxPrice}
                      value={price}
                      onChange={updateFilterValue}
                    />
                  </div>
                  <div className="border-b-2 border-black mt-4"></div>
                  <div className="mt-4">
                    <Button
                      // roundedFull
                      small
                      name="clear filter"
                      onClick={clearFilters}
                      icon={<AiFillFilter />}
                    />
                  </div>
                </div>
              )}
            </div>
            <li className="flex justify-center items-center gap-2">
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  name="sort"
                  id="sort"
                  className="text-Text-Secondary text-xl font-medium border-2 border-red-300"
                  onClick={sorting}
                >
                  <option value="lowest">Price(lowest)</option>
                  <option value="#" disabled></option>
                  <option value="highest">Price(highest)</option>
                  <option value="#" disabled></option>
                  <option value="a-z">Price(a-z)</option>
                  <option value="#" disabled></option>
                  <option value="z-a">Price(z-a)</option>
                </select>
              </form>
            </li>
          </ul>
        </div>
        {/* Product_Filter items end */}
      </div>
      {/* Product_Filter end  */}
    </>
  );
};

export default Product_Filter;
