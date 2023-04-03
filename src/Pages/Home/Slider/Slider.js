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
    <div className='px-3 max-container'>
      <div className="xl:w-[500px] lg:w-[350px] text-white">
        <h2 className="uppercase xl:text-5xl lg:text-3xl md:text-2xl text-3xl font-extrabold fontSfMed">
          THE BROtherhood
        </h2>
        <div className="xl:text-[20px] lg:text-[16px] md:text-[14px] text-[16px]">
          <p className="mt-1 fontSfMed">
            Home to 8,888 CryptoBros — unique digital collectibles with proof
            of ownership stored on the Ethereum blockchain.
          </p>
          <p className="my-3 fontSfMed">
            CryptoBros is a crypto-native brand for the culture. We champion
            the founders, builders, analysts, creators, artists, collectors,
            and contributors shaping the future of web3 & crypto.
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
      </div>
      {/* slider text ends  */}
      <div>
        {
          sliderImg.map((sliderImg, i) => (
            <Slider key={i} {...settings}>
              <div>
                <SliderItem sliderImg={sliderImg}></SliderItem>
              </div>
            </Slider>
          ))
        }
      </div>
    </div>
  );
};

export default Sliders;



