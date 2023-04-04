import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] text-white lg:w-[950px] mx-auto lg:px-0 px-4">
        <div className="md:flex block justify-between items-center">
          <div className="xl:text-[22px] lg:text-[18px] md:text-[16px] text-[28px] flex justify-center items-center gap-5">
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
          <div className="md:flex block justify-center items-center lg:gap-8 md:gap-6 fontSfMed">
            <div className="flex justify-center mt-4 items-center gap-6">
              <Link className="hover:bg-white hover:p-1 hover:text-black rounded">
                Privacy Policy
              </Link>
              <Link className="hover:bg-white hover:p-1 hover:text-black rounded">
                Terms of Use
              </Link>
            </div>
            <div className="flex justify-center mt-4 items-center gap-6">
              <Link className="hover:bg-white hover:p-1 hover:text-black rounded">
                IP Rights
              </Link>
              <Link className="bg-white p-1 text-black rounded hover:bg-black hover:p-1 hover:text-white">
                We’re Hiring 👀
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        {/* footer bottom */}
        <div className="pb-6 bg-black text-center md:text-start">
          <h2 className="fontSfMed">Copyright © 2023 CryptoBros</h2>
        </div>
      </div>
    );
};

export default Footer;