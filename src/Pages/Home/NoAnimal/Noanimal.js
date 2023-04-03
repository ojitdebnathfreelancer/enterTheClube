import React from "react";
import Title from "../../../Components/Title/Title";
import img from "../.././../assets/Honorary/Frank.jpg";

const Noanimal = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] px-4">
         <div className="max-container ">
            <div className="grid md:grid-cols-4 gap-6 lg:w-[950px] mx-auto mt-3">
               <div className="col-span-1">
                  <img className="rounded-md w-full" src={img} alt="" />
               </div>
               <div className="md:col-span-3 lg:ml-28">
                  <Title title={"No animal pfp bullsh*t."} />
                  <p className="text-gray-200 fontSfReg mb-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quia magnam vel eos fuga voluptate esse minus consequatur
                     sunt accusamus quae.
                  </p>
                  <p className="text-gray-200 fontSfReg">
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
