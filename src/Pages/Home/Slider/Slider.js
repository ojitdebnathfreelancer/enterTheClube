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
import tre from "../../../assets/Honorary/Tre.png";
import Slider from "react-slick";
import SliderItem from './SliderItem';


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
       name: "Tre",
     },
   ];

   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     speed: 2000,
     autoplaySpeed: 2000,
     cssEase: "linear",
   };

   return (
     <>
         {sliderImg.map((sliderImg, i) => (
            <Slider key={i} {...settings}>
             <SliderItem sliderImg={sliderImg}></SliderItem>
            </Slider>
         ))}
     </>
   );
};

export default Sliders;