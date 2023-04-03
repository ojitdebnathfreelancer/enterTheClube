import React from 'react';
import logo from '../../assets/logo.png';
import landingImg from "../../assets/landingImg.png";
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";

const Landing = () => {
    return (
      <div className="max-container px-5">
        <div className="flex justify-between items-center mt-[16px]">
          <div className="xl:h-[70px] lg:h-[60px] md:h-[50px] h-[40px]">
            <img className="h-full" src={logo} alt="" />
          </div>
          <div className="xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px] flex gap-3">
            <BsTwitter />
            <BsDiscord />
            <BsInstagram />
          </div>
        </div>
        <div className="flex justify-center items-center xl:h-[500px] lg:h-[400px] md:h-[300px] h-[200px]">
          <img className="h-full" src={landingImg} alt="" />
        </div>
        <div className="text-center">
          <button className="border-2 border-gray-900 rounded px-6 py-2">
            Enter The BroTheRhood
          </button>
        </div>
      </div>
    );
};

export default Landing;