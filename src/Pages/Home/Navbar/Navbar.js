import React from 'react';
import logo from "../../../assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="flex justify-between items-center py-2 mb-4 px-5">
      <Link to='/'>
        <img className="h-14" src={logo} alt="logo" />
      </Link>
      <div className="text-gray-200">
        <button onClick={() => setMenu(!menu)}>
          <HiOutlineBars3 size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;