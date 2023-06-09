import React from "react";
import logo from "../../assets/logo.png";
import landingImg from "../../assets/landingImg.png";
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Landing = () => {
   return (
      <div>
         <div className="flex justify-between items-center mt-[16px] px-5">
            <div className="xl:h-[70px] lg:h-[60px] md:h-[50px] h-[40px]">
               <Link>
                  <img
                     loading="lazy"
                     className="h-full"
                     src={logo}
                     alt="logo"
                  />
               </Link>
            </div>
            <div className="xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px] flex gap-3">
               <Link>
                  <BsTwitter />
               </Link>
               <Link>
                  <BsDiscord />
               </Link>
               <Link>
                  <BsInstagram />
               </Link>
            </div>
         </div>
         <div className="max-container lg:px-0 md:px-4">
            <div>
               <div className="flex justify-center items-center xl:h-[500px] lg:h-[420px] md:h-[300px] h-[250px]">
                  <img className="h-full" src={landingImg} alt="landingImg" />
               </div>
               <div className="text-center">
                  <Link to="/home">
                     <button className="border-2 border-gray-900 rounded xl:text-normal lg:text-[18px] md:text-[16px] text-[14px] xl:px-5 lg:px-4 md:px-2 px-2 py-2 font-trash duration-300 hover:bg-black hover:text-white">
                        Enter The BroTheRhood
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
