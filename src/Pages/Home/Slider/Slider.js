import React from 'react';
import Luca from "../../../assets/Honorary/Luca Netz.jpg";
import jack from "../../../assets/Honorary/Jack Butcher.png";
import thread from "../../../assets/Honorary/ThreadGuy.jpg";
import cropto from "../../../assets/Honorary/Crypto Bitlord.jpg";
import deeze from "../../../assets/Honorary/Deeze.png";
import frank from "../../../assets/Honorary/Frank.jpg";
import keung from "../../../assets/Honorary/Keung.png";
import kmoney from "../../../assets/Honorary/Kmoney.png";
import minister from "../../../assets/Honorary/Minister of NFTs.jpg";
import arrow from '../../../assets/arrow-2.svg';
import tre from "../../../assets/Honorary/Tre.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import SliderItem from './SliderItem';
import Title from '../../../Components/Title/Title';


const Sliders = () => {

  const sliderImg = [
    {
      id: 1,
      img: Luca,
      name: "Lucanetz",
    },
    {
      id: 2,
      img: jack,
      name: "Jackbutcher",
    },
    {
      id: 3,
      img: thread,
      name: "Threadguy",
    },
    {
      id: 4,
      img: cropto,
      name: "Crypto",
    },
    {
      id: 5,
      img: deeze,
      name: "Deeze",
    },
    {
      id: 6,
      img: frank,
      name: "Frank",
    },
    {
      id: 7,
      img: keung,
      name: "Keung",
    },
    {
      id: 8,
      img: kmoney,
      name: "Kmoney",
    },
    {
      id: 9,
      img: minister,
      name: "Minister",
    },
    {
      id: 10,
      img: tre,
      name: "tre",
    }
  ];



  return (
    <div className='lg:relative md:static static lg:h-[365px] lg:mt-[200px] md:mt-[150px] mt-[50px]'>
      <div className="px-3 max-container lg:absolute md:static static lg:top-0 lg:left-[210px]">
        <div className=" text-white text-center md:text-start lg:flex md:flex block justify-between lg:gap-0 md:gap-5">
          <div className="lg:text-[16px] md:text-[14px] text-[16px] lg:w-[30%] md:w-[50%] w-[100%]">
            <Title title={"THE BROtherhood"} classes={"text-start"} />
            <p className="mt-1 fontSfMed">
              Home to 8,888 CryptoBros — unique digital collectibles with proof of
              ownership stored on the Ethereum blockchain.
            </p>
            <p className="my-3 fontSfMed">
              CryptoBros is a crypto-native brand for the culture. We champion the
              founders, builders, analysts, creators, artists, collectors, and
              contributors shaping the future of web3 & crypto.
            </p>
            <p className="fontSfMed">
              We’re building a viral brand that spreads the excitement of crypto
              and web3 to the world through content, memes, merchandise, and
              digital collectables
            </p>
            <p className="mt-3 fontSfMed">
              So what are you waiting for, let’s moon together.
            </p>
          </div>
          {/* slider text ends  */}

          <div className="lg:w-[50%] md:w-[50%] w-[100%] h-[100%]">
            <div className='flex justify-center'>
              <p className='flex items-center text-[18px] fontTrash text-[#56FFFF]
               lg:ml-28 md:ml-20'>Some of our honorary bros
                <img className='mx-3 lg:w-[110px] md:w-[100px] w-[80px] h-[100px] md' src={arrow} alt='arrow'></img>
              </p>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={25}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Navigation, Autoplay]}
            >
              {sliderImg.map((sliderImg, i) => (
                <SwiperSlide key={i}>
                  <SliderItem sliderImg={sliderImg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );

};


export default Sliders;



