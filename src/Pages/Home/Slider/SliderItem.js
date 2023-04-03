import React from 'react';


const SliderItem = ({ sliderImg }) => {
  return (
    <div className='relative'>
      <img
        className="z-[-1] lg:h-[170px] md:h-[120px] rounded"
        src={sliderImg?.img}
        alt="Luca"
      />
      <p className="absolute lg:top-[95%] lg:ml-[-20px] md:mt-[-35px] md:ml-[-20px]  lg:text-[14px] md:text-[12px] text-[12px] rounded bg-black text-white px-1 fontSfMed z-[20]">
        @{sliderImg?.name}
      </p>
    </div>
  );
};

export default SliderItem;

