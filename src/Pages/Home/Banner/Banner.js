import React from "react";
import logo from "../../../assets/logo.png";

const Banner = () => {
   return (
      <div className="px-4">
         <div className="flex justify-between items-center py-2">
            <img className="h-16" src={logo} alt="" />
            <p className="text-white">manu</p>
         </div>
         <div className="max-container text-white text-center lg:leading-[170px] leading-[120px]">
            <h1 className="lg:text-[180px] md:text-[130px] text-[110px]">
               CRYPTO
            </h1>
            <h1 className="lg:text-[180px] md:text-[130px] text-[110px]">
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
