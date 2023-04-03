import React from "react";
import logo from "../../../assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";

const Banner = () => {
   return (
      <div className="px-4">
         <div className="flex justify-between items-center py-2 mb-4">
            <img className="h-14" src={logo} alt="" />
            <div className="text-gray-200">
               <HiOutlineBars3 size={25} />
            </div>
         </div>
         <div className="max-container fontRedunReg text-white text-center lg:leading-[170px] leading-[120px]">
            <h1 className="lg:text-[250px] lg:leading-[240px] md:leading-[210px] md:text-[220px] text-[110px]">
               CRYPTO
            </h1>
            <h1 className="lg:text-[250px] lg:leading-[240px] md:leading-[210px] md:text-[220px] text-[110px]">
               BROS
            </h1>
            <p className="fontTrash text-[#5accf5] md:text-2xl text-xl md:mt-6">
               Welcome To The BrotherHood
            </p>
         </div>
      </div>
   );
};

export default Banner;
