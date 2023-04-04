import React from "react";
import Title from "../../../Components/Title/Title";
import img from "../.././../assets/Honorary/Frank.jpg";

const Noanimal = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] px-4">
         <div className="max-container ">
            <div className="grid md:grid-cols-4 gap-6 lg:w-[950px] mx-auto mt-3">
               <div className="col-span-1 flex justify-center items-center">
                  <img className="rounded-md w-full" src={img} alt="" />
               </div>
               <div className="md:col-span-3 lg:ml-28">
                  <Title title={"No animal pfp bullsh*t."} classes={"lg:text-start md:text-start text-center"} />
                  <p className="text-gray-200 fontSfReg md:leading-[30px] md:text-[20px] mb-3 lg:text-start md:text-start text-center">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quia magnam vel eos fuga voluptate esse minus consequatur
                     sunt accusamus quae.
                  </p>
                  <p className="text-gray-200 fontSfReg md:leading-[30px] md:text-[20px] lg:text-start md:text-start text-center">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quia magnam vel eos fuga voluptate esse minus consequatur
                     sunt accusamus quae. fuga voluptate esse minus consequatur
                     sunt accusamus quae.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Noanimal;
