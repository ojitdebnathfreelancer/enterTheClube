import React from "react";
import logo from "../../../assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = ({ menu, setMenu }) => {
   return (
      <div className="max-container">
         <div className="mt-[16px] flex justify-between items-center mb-4 lg:px-0 md:px-4 px-4">
            <Link to="/">
               <img
                  className="xl:h-[70px] lg:h-[60px] md:h-[50px] h-[40px]"
                  src={logo}
                  alt="logo"
               />
            </Link>
            <div className="text-gray">
               <button onClick={() => setMenu(!menu)}>
                  <HiOutlineBars3 size={30} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
