import React from 'react';
import logo from '../../assets/logo.png';
import landingImg from "../../assets/landingImg.png";
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";

const Landing = () => {
    return (
      <div className="max-container px-2">
        <div className="flex justify-between items-center mt-[16px]">
          <div className="xl:h-[70px] lg:h-[60px] md:h-[50px] h-[40px]">
            <img className="h-full" src={logo} alt="logo" />
          </div>
          <div className="xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px] flex gap-3">
            <BsTwitter />
            <BsDiscord />
            <BsInstagram />
          </div>
        </div>
        
        <div>
          <div className="flex justify-center items-center xl:h-[500px] lg:h-[420px] md:h-[300px] h-[250px]">
            <img className="h-full" src={landingImg} alt="landingImg" />
          </div>
          <div className='text-center'>
            <button className="border-2 border-gray-900 rounded xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] xl:px-5 lg:px-4 md:px-2 px-2 py-2 fontTrash">
              Enter The BroTheRhood
            </button>
          </div>
        </div>
      </div>
    );
};

export default Landing;