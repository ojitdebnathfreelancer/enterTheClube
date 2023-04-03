import React from 'react';


const SliderItem = ({ sliderImg }) => {
    console.log(sliderImg);
  return (
    <div className="px-3 max-container">
      <div className="flex justify-center items-center my-24 gap-8">
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
        <div className="flex justify-center items-center gap-6">
          <div>
            <img
              className="relative xl:h-[200px] lg:h-[180px] md:h-[160px] rounded"
              src={sliderImg?.img}
              alt="Luca"
            />
            <p className="absolute xl:mt-[-50px] xl:ml-[-20px] lg:mt-[-50px] lg:ml-[-20px] md:mt-[-50px] mdml-[-20px] xl:text-[16px] lg:text-[14px] rounded bg-black text-white px-1 fontSfMed">
              {sliderImg?.name}
            </p>
          </div>

{/*         
          <div>
            <img
              className="relative xl:h-[200px] lg:h-[180px] md:h-[160px] rounded"
              src={Luca}
              alt="Luca"
            />
            <p className="absolute xl:mt-[-50px] xl:ml-[-20px] lg:mt-[-50px] lg:ml-[-20px] md:mt-[-50px] mdml-[-20px] xl:text-[16px] lg:text-[14px] rounded bg-black text-white px-1 fontSfMed">
              @Lucanelg
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SliderItem;

