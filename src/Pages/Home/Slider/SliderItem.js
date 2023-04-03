import React from 'react';


const SliderItem = ({ sliderImg }) => {
  console.log(sliderImg);
  return (
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
  );
};

export default SliderItem;

