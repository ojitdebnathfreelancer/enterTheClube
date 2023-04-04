import React from "react";
import Title from "../../../Components/Title/Title";
import img1 from "../../../assets/ourCollection/1.png";
import img2 from "../../../assets/ourCollection/2.png";
import img3 from "../../../assets/ourCollection/3.png";
import img4 from "../../../assets/ourCollection/4.png";

const OurCollection = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] px-4">
         <div className="max-container ">
            <Title title={"our collections"} classes={"text-center"} />
            <div className="grid md:grid-cols-2 gap-6 lg:w-[950px] mx-auto mt-3">
               <div
                  className=" rounded-md max- lg:h-[300px] md:h-[330px] h-[300px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 ">
                     <h3 className="text-gray-200 md:text-[24px] text-[21px] font-semibold ">
                        MAY 2023
                     </h3>
                     <h3 className="text-gray-50 md:text-[34px] text-[28px] fontSfBold mt-1 mb-2">
                        The CryptoBros
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5 md:text-[20px] ">
                        The CryptoBros our primiere collection od 8,888 PFPs
                        that serve as a membership card to utility and perks
                        available exclusively to the Brotherhood.
                     </p>
                     <button className="bg-white text-gray-950 fontSfMed rounded-lg px-3 py-1 mt-3">
                        Learn More
                     </button>
                  </div>
               </div>
               <div
                  className=" rounded-md max- lg:h-[300px] md:h-[330px] h-[300px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img2})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 ">
                     <h3 className="text-gray-200 md:text-[24px] text-[21px] font-semibold ">
                        JUNE 2023
                     </h3>
                     <h3 className="text-gray-50 md:text-[34px] text-[28px] fontSfBold mt-1 mb-2">
                        Season I: Brordinals
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5 md:text-[20px]">
                        A first of its kind limited edition collection
                        consisting of 10 winnable and 10 honorary one-of-one
                        CryptoBro ordinals, inscribed on the Bitcoin blockchain.
                     </p>
                     <button className="bg-white text-gray-950 fontSfMed rounded-lg px-3 py-1 mt-3">
                        Learn More
                     </button>
                  </div>
               </div>
               <div
                  className=" rounded-md max- lg:h-[300px] md:h-[330px] h-[300px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img3})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 ">
                     <h3 className="text-gray-200 md:text-[24px] text-[21px] font-semibold ">
                        TBC
                     </h3>
                     <h3 className="text-gray-50 md:text-[34px] text-[28px] fontSfBold mt-1 mb-2">
                        The Feds
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5 md:text-[20px]">
                        The CryptoBros wouldn’t be complete without 888
                        utility-enabled Feds who make the money printer go brrr.
                        Rumour has it they’re coming for your $BRO.
                     </p>
                  </div>
               </div>
               <div
                  className=" rounded-md max- lg:h-[300px] md:h-[330px] h-[300px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img4})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 ">
                     <h3 className="text-gray-200 md:text-[24px] text-[21px] font-semibold ">
                        TBC
                     </h3>
                     <h3 className="text-gray-50 md:text-[34px] text-[28px] fontSfBold mt-1 mb-2">
                        II: Attention Economy
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5 md:text-[20px]">
                        More ordinals, followers, views, and attention.
                        CryptoBros go viral, become a hedge against inflation
                        and trigger an NFT Bull-Run.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OurCollection;
