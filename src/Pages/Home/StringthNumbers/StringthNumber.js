import React from "react";
import Title from "../../../Components/Title/Title";
import img2 from "../../../assets/Honorary/Minister of NFTs.jpg";
import img1 from "../../../assets/Honorary/MetaBro.png";
import img4 from "../../../assets/Honorary/MoonBro.png";
import img3 from "../../../assets/Honorary/SuperBro.png";

const StringthNumber = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px]">
         <div className="max-container px-4">
            <div className="grid lg:grid-cols-2 gap-6 lg:w-[950px] mx-auto mt-3">
               <div className="text-gray lg:mr-8">
                  <Title
                     title={"STRENGTH IN NUMBERS"}
                     classes={"text-center md:text-start"}
                  />
                  <p className="md:leading-[30px] mb-5 md:text-normal  font-sfReg lg:text-start md:text-start text-center">
                     The vision for CryptoBros extends far beyond our founding
                     team and core community members.{" "}
                  </p>
                  <p className="md:leading-[30px] mb-5 md:text-normal  font-sfReg lg:text-start md:text-start text-center">
                     Today, with the help of blockchain technology, we extend an
                     invitation to each and every hodler to join us in building
                     a brand and community that represents the space that is
                     truly special to all of us.
                  </p>{" "}
                  <p className="md:leading-[30px] mb-5 md:text-normal  font-sfReg lg:text-start md:text-start text-center">
                     We, in turn, pledge to give our best in creating the
                     strongest crypto-native brand on the internet. From web3 to
                     the world.
                  </p>{" "}
                  <p className="md:leading-[30px] mb-5 md:text-normal  font-sfReg lg:text-start md:text-start text-center">
                     {" "}
                     By CryptoBros, for Crypto Bros.
                  </p>
               </div>
               <div className="grid md:grid-cols-2 gap-[25px]">
                  <div className="relative">
                     <img className="rounded-md w-full " src={img1} alt="" />
                     <h6 className="absolute lg:bottom-4 md:bottom-8 bottom-6 -left-5 px-1.5 py-0.5 rounded-md text-gray bg-black">
                        @dontfadeanon
                     </h6>
                  </div>
                  <div className="relative">
                     <img className="rounded-md w-full " src={img2} alt="" />
                     <h6 className="absolute lg:bottom-4 md:bottom-8 bottom-6 -left-5 px-1.5 py-0.5 rounded-md text-gray bg-black ">
                        @luna
                     </h6>
                  </div>
                  <div className="relative">
                     <img className="rounded-md w-full " src={img3} alt="" />
                     <h6 className="absolute lg:bottom-4 md:bottom-8 bottom-6 -left-5 px-1.5 py-0.5 rounded-md text-gray bg-black ">
                        @breezy
                     </h6>
                  </div>
                  <div className="relative">
                     <img className="rounded-md w-full " src={img4} alt="" />
                     <h6 className="absolute lg:bottom-4 md:bottom-8 bottom-6 -left-5 px-1.5 py-0.5 rounded-md text-gray bg-black ">
                        @dedev
                     </h6>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default StringthNumber;
