import React from "react";
import Title from "../../../Components/Title/Title";

const ApplyFor = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] px-4 pb-4">
         <div className="max-container ">
            <Title title={"Apply for Brolist"} classes={"text-center"} />
            <div className="lg:w-[880px] mx-auto text-center">
               <p className="text-center text-gray-300 fontSfReg -mt-2">
                  Join us & relive excitement you haven't felt since aping into
                  your frist NFT project.
               </p>
               <div>
                  <button
                     className="fontTrash border text-[#56FFFF]  border-[#56FFFF] rounded-md mt-2 
                  py-1 px-3"
                  >
                     APPlY NOW
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ApplyFor;
