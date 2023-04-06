import React from "react";
import Luca from "../../../assets/Honorary/Luca Netz.jpg";
import jack from "../../../assets/Honorary/Jack Butcher.png";
import thread from "../../../assets/Honorary/ThreadGuy.jpg";
import cropto from "../../../assets/Honorary/Crypto Bitlord.jpg";
import deeze from "../../../assets/Honorary/Deeze.png";
import frank from "../../../assets/Honorary/Frank.jpg";
import keung from "../../../assets/Honorary/Keung.png";
import kmoney from "../../../assets/Honorary/Kmoney.png";
import minister from "../../../assets/Honorary/Minister of NFTs.jpg";
import arrow from "../../../assets/arrow-2.svg";
import tre from "../../../assets/Honorary/Tre.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import SliderItem from "./SliderItem";
import Title from "../../../Components/Title/Title";

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
      },
   ];

   return (
      <div className="lg:relative md:static static lg:h-[400px] lg:mt-[200px] md:mt-[150px] mt-[50px] overflow-hidden">
         <div className="px-4 h-full lg:absolute md:static static lg:top-0 lg:right-[-115px] slider">
            <div className=" text-gray text-center md:text-start lg:flex md:block block justify-between lg:gap-0 md:gap-5">
               <div className="lg:text-[16px] md:text-[16px] text-[16px] lg:w-[30%] md:w-[100%] w-[100%] slider-left">
                  <Title
                     title={"THE BROtherhood"}
                     classes={"lg:text-start md:text-start text-center"}
                  />
                  <p className="mt-1 font-sfMed">
                     Home to 8,888 CryptoBros — unique digital collectibles with
                     proof of ownership stored on the Ethereum blockchain.
                  </p>
                  <p className="my-3 font-sfMed">
                     CryptoBros is a crypto-native brand for the culture. We
                     champion the founders, builders, analysts, creators,
                     artists, collectors, and contributors shaping the future of
                     web3 & crypto.
                  </p>
                  <p className="font-sfMed">
                     We’re building a viral brand that spreads the excitement of
                     crypto and web3 to the world through content, memes,
                     merchandise, and digital collectables
                  </p>
                  <p className="mt-3 font-sfMed">
                     So what are you waiting for, let’s moon together.
                  </p>
               </div>
               {/* slider text ends  */}

               <div className="md:w-[100%] w-[100%] h-[100%] slider-right">
                  <div className="flex justify-center">
                     <p
                        className="flex items-center text-[18px] fontTrash text-teal
               slider-arrow"
                     >
                        Some of our honorary bros
                        <img
                           className="mx-3 lg:w-[110px] md:w-[100px] w-[80px] h-[100px] md"
                           src={arrow}
                           alt="arrow"
                        ></img>
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
