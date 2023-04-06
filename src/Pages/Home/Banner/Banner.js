import React from "react";

const Banner = () => {
   return (
      <div>
         <div className="max-container font-redunReg text-white text-center ">
            <h1 className="lg:text-bannerTextLg lg:leading-bannerLineHeightLg md:leading-bannerLineHeightMd md:text-bannerTextMd text-bannerTextSm">
               CRYPTO
            </h1>
            <h1 className="lg:text-[250px] lg:leading-bannerLineHeightLg md:leading-bannerLineHeightMd md:text-[220px] text-[110px]">
               BROS
            </h1>
            <p className="font-trash text-teal md:text-normal text-xl md:mt-6">
               Welcome To The BrotherHood
            </p>
         </div>
      </div>
   );
};

export default Banner;
