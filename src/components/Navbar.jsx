import { Vector, Signin } from "../assets/Images";
import { navData } from "../constants/index";

const Navbar = () => {
  return (
    <>
      {/* nav start  */}
      <div className="flex justify-between p-5 mx-16">
        {/* logo start  */}
        <div className="items-center flex w-14">
          <img src={Vector} alt="" />
        </div>
        {/* logo end  */}
        {/* nav items start */}
        <div className="p-2">
          <ul className="flex">
            {navData.map((item, index) => (
              <li className="p-4 hover:text-orange-500" key={index}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
            <li className="p-4">
              <a href="">
                <img src={Signin} alt="" />
              </a>
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
