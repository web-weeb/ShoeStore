import { useState } from "react";
import { Vector, Signin } from "../assets/Images";
import { navData } from "../constants/index";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { useAuth } from "../store/auth";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../store/cart";

const Navbar = () => {
  const { isUserLoggedIn } = useAuth();
  const { total_item } = useCartContext();
  const [nav, setNav] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const [authOpen, setAuthOpen] = useState(false);

  const togauthdown = () => {
    setAuthOpen(!authOpen);
  };
  return (
    <>
      {/* nav start  */}
      <div className="flex relative z-40 justify-between sm:px-6 sm:py-4 py-1 px-3">
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
                  <NavLink to={`/${item.url}`}>{item.title}</NavLink>
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

            <li className="px-2">
              {isUserLoggedIn ? (
                <NavLink to="/logout">Logout</NavLink>
              ) : (
                <>
                  <button onClick={togauthdown}>
                    <img src={Signin} alt="" />
                  </button>
                  {authOpen && (
                    <div className="origin-center absolute top-16 right-7 z-10  mt-2  w-28 rounded-md shadow-lg">
                      <div className="py-1 bg-white border rounded-md shadow-xs">
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          Signup
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}
            </li>
            <li className="px-2">
              {isUserLoggedIn ? (
                <>
                  <NavLink to="/card">
                    <FaShoppingCart size={20} />
                    <span className="absolute top-4 right-7 rounded-full bg-black text-white text-xs px-1">
                      {total_item}
                    </span>
                  </NavLink>
                </>
              ) : (
                <></>
              )}
            </li>
          </ul>
          <ul className="flex md:hidden">
            <li
              className="sm:p-4 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <RiCloseLine size={26} className="z-[99] fixed top-5 right-5" />
              ) : (
                <AiOutlineMenu size={26} />
              )}
            </li>
          </ul>
          {isOpen && (
            <div className="fixed left-0 top-0 bottom-0 right-0 bg-white z-50">
              <ul className="flex flex-col items-center justify-center gap-6 text-sm h-full">
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
                        className={"text-xl hover:text-primary duration-200"}
                      >
                        {item.title}
                      </NavLink>
                    ) : (
                      <a
                        href={`#${item.url}`}
                        className={`py-1 text-xl duration-200 ${
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
                  <li className="px-6">
                    {isUserLoggedIn ? (
                      <NavLink to="/logout">Logout</NavLink>
                    ) : (
                      <>
                        <button onClick={togauthdown}>
                          <img src={Signin} alt="" />
                        </button>
                        {authOpen && (
                          <div className="origin-center absolute top-16 right-7 z-10  mt-2  w-28 rounded-md shadow-lg">
                            <div className="py-1 bg-white border rounded-md shadow-xs">
                              <Link
                                to="/login"
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                              >
                                Login
                              </Link>
                              <Link
                                to="/register"
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                              >
                                Signup
                              </Link>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </li>
                </li>
                <li className="px-2">
                  {isUserLoggedIn ? (
                    <>
                      <NavLink to="/card">
                        <FaShoppingCart size={26} />
                        <span className="absolute -mt-8 ml-4 rounded-full bg-black text-white text-xs px-1">
                          {total_item}
                        </span>
                      </NavLink>
                    </>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* nav items end */}
      </div>
      {/* nav end  */}
    </>
  );
};

export default Navbar;
