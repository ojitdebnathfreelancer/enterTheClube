import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const SideMenu = ({ menu, setMenu }) => {

  return (
    <div
      className={`bg-[#1D1D1D] border-l-[2px] min-h-screen border-[#707070] xl:w-[42%] lg:w-[40%] md:w-[45%] w-[90%] md:p-8 p-4 absolute z-[99999999]  lg:duration-[1s] md:duration-[0.8s] duration-[0.8s] ${
        menu ? "top-0 right-0" : "top-0 right-[-100%]"
      }`}
    >
      <div className=" flex justify-between items-center ">
        <div className="text-white">
          <h2 className="fontSfBold md:text-2xl text-[24px]">Ecosystem</h2>
        </div>
        <div className="flex justify-center items-center md:gap-4 gap-2 text-white lg:text-[24px] md:text-[20px] text-[20px]">
          <Link>
            <BsTwitter />
          </Link>
          <Link>
            <BsDiscord />
          </Link>
          <Link>
            <BsInstagram />
          </Link>
          <button onClick={() => setMenu(!menu)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <div className="lg:flex block justify-between items-center gap-4 menu-color mt-10">
        <div>
          <h2 className="text-white fontSfMed lg:text-[22px] text-[20px]">
            About CryptoBros
          </h2>
          <h3 className="text-[#50E8E8] fontSfMed md:text-[18px] text-[17px] mt-4">
            The Brotherhood
          </h3>
          <p className="fontSfMed text-[14px]">Learn about the vision</p>

          <p className="mt-4 fontSfMed text-[14px]">The Yearbook</p>
          <p className="fontSfMed text-[14px]">The CryptoBros Gallery</p>

          <p className="mt-4 fontSfMed text-[14px]">Shop</p>
          <p className="fontSfMed text-[14px]">Merch and more</p>
        </div>
        <div>
          <h2 className="text-white fontSfMed lg:text-[22px] text-[20px]">
            BroCoin
          </h2>
          <p className="fontSfMed text-[14px] mt-4">Stake your CryptoBros</p>
          <p className="fontSfMed text-[14px]">
            Earn $BRO by Staking your CryptoBros
          </p>
          <h3 className="text-[#50E8E8] fontSfMed md:text-[18px] text-[17px] mt-4">
            $BRO Documentation
          </h3>
          <p className="text-[14px] fontSfMed">
            All you need to know about $BRO
          </p>

          <p className="mt-4 fontSfMed text-[14px]">Spend $BRO</p>
          <p className="fontSfMed text-[14px]">
            Hodl pass, auctions, raffles & more
          </p>
        </div>
      </div>

      <div className="lg:flex block justify-between items-center menu-color gap-4 mt-10">
        <div className="mb-[44px]">
          <h2 className="text-white fontSfMed lg:text-[22px] text-[20px]">
            Participate
          </h2>

          <p className="mt-4 fontSfMed text-[14px]">Season I: Brodinals</p>
          <p className="fontSfMed text-[14px]">High stakes and weekly prizes</p>

          <p className="mt-4 fontSfMed text-[14px]">Hodleadboard</p>
          <p className="fontSfMed text-[14px]">
            Our biggest fans and supporters
          </p>
        </div>
        <div className="mr-[28px] mt-5">
          <h2 className="text-white fontSfMed lg:text-[22px] text-[20px]">
            Media
          </h2>
          <h3 className="text-[#50E8E8] fontSfMed md:text-[18px] text-[17px] mt-4">
            House of Memes
          </h3>
          <p className="fontSfMed text-[14px]">
            #1 Crypto Twitter Meme Library
          </p>
          <p className="fontSfMed text-[14px] mt-4">BroFund</p>
          <p className="fontSfMed text-[14px]">
            We’ll pay you to do cool sh*t.
          </p>
          <p className="mt-4 fontSfMed text-[14px]">Web Series</p>
          <p className="fontSfMed text-[14px]">
            BTS of leaders innovating in Web3
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;