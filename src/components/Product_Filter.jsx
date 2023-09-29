import { SlidersHorizontal } from "lucide-react";
import { filter, sort } from "../assets/icons";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const Product_Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Product_Filter start  */}
      <div className="flex relative z-10 justify-between p-4 mx-6">
        {/* text start  */}
        <div className="flex w-auto">
          <h2 className="text-2xl">Women’s Shoes (20)</h2>
        </div>
        {/* text end  */}
        {/* Product_Filter items start */}
        <div className="p-2 flex">
          <ul className="hidden md:flex gap-14 items-center text-sm">
            <li className="flex justify-center items-center gap-2">
              <h4 className="text-xl">Show Filters</h4>
              <button>
                <SlidersHorizontal size={20} />
              </button>
            </li>
            <li className="flex justify-center items-center gap-2">
              <h3 className="text-2xl">Sort By</h3>
              <button onClick={toggleDropdown}>
                <BsChevronDown size={20} />
              </button>
              {isOpen && (
                <div className="origin-bottom absolute top-16 z-10  mt-2 w-48 rounded-md shadow-lg">
                  <div className="py-1 bg-white border rounded-md shadow-xs">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              )}
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
