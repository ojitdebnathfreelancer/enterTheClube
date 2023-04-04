import React from 'react';
import logo from "../../../assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="flex justify-between items-center py-2 mb-4 px-5">
        <img className="h-14" src={logo} alt="" />
        <div className="text-gray-200">
          <Link to='/siteMenu'>
            <HiOutlineBars3 size={30} />
          </Link>
        </div>
      </div>
    );
};

export default Navbar;