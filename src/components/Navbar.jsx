import { useState } from "react";
import { Vector, Signin } from "../assets/Images";
import { navData } from "../constants/index";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState("Home");
  return (
    <>
      {/* nav start  */}
      <div className="flex fixed left-0 right-0 top-0 z-40 justify-between p-4 mx-6">
        {/* logo start  */}
        <div className="items-center flex w-14">
          <img src={Vector} alt="" />
        </div>
        {/* logo end  */}
        {/* nav items start */}
        <div className="p-2 flex">
          <ul className="hidden md:flex gap-6 items-center text-sm">
            {navData.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setNav(item.title);
                }}
              >
                {item.title === "Products" || item.title === "Home" ? (
                  <NavLink
                    to={`/${item.url}`}

                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <a
                    href={`#${item.url}`}
                    className={`py-1 ${
                      nav === item.title
                        ? "text-primary hover:text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
            <li className="px-6">
              <a href="">
                <img src={Signin} alt="" />
              </a>
            </li>
          </ul>
          <ul className="flex md:hidden">
            <li className="p-4">
              <AiOutlineMenu size={26} />
            </li>
          </ul>
        </div>
        {/* nav items end */}
      </div>
      {/* nav end  */}
    </>
  );
};

export default Navbar;
