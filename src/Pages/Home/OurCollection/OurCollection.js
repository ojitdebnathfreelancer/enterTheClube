import React from "react";
import Title from "../../../Components/Title/Title";
import img1 from "../../../assets/Honorary/Deeze.png";

const OurCollection = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] px-4">
         <div className="max-container ">
            <Title title={"our collections"} classes={"text-center"} />
            <div className="grid md:grid-cols-2 gap-6 lg:w-[950px] mx-auto mt-3">
               <div
                  className=" rounded-md max- h-[260px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 lg:mt-4">
                     <h3 className="text-gray-200 text-xl font-semibold ">
                        MAY 2023
                     </h3>
                     <h3 className="text-gray-50 text-2xl font-bold mt-1 mb-2">
                        The CryptoBros
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5">
                        The CryptoBros our primiere collection od 8,888 PFPs
                        that serve as a membership card to utility and perks
                        available exclusively to the Brotherhood.
                     </p>
                     <button className="bg-white text-gray-950 rounded-lg px-3 py-1 mt-3">
                        Learn More
                     </button>
                  </div>
               </div>
               <div
                  className=" rounded-md max- h-[260px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 lg:mt-4">
                     <h3 className="text-gray-200 text-xl font-semibold ">
                        MAY 2023
                     </h3>
                     <h3 className="text-gray-50 text-2xl font-bold mt-1 mb-2">
                        The CryptoBros
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5">
                        The CryptoBros our primiere collection od 8,888 PFPs
                        that serve as a membership card to utility and perks
                        available exclusively to the Brotherhood.
                     </p>
                     <button className="bg-white text-gray-950 rounded-lg px-3 py-1 mt-3">
                        Learn More
                     </button>
                  </div>
               </div>
               <div
                  className=" rounded-md max- h-[260px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 lg:mt-4">
                     <h3 className="text-gray-200 text-xl font-semibold ">
                        MAY 2023
                     </h3>
                     <h3 className="text-gray-50 text-2xl font-bold mt-1 mb-2">
                        The CryptoBros
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5">
                        The CryptoBros our primiere collection od 8,888 PFPs
                        that serve as a membership card to utility and perks
                        available exclusively to the Brotherhood.
                     </p>
                     <button className="bg-white text-gray-950 rounded-lg px-3 py-1 mt-3">
                        Learn More
                     </button>
                  </div>
               </div>
               <div
                  className=" rounded-md max- h-[260px]"
                  style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     width: "100%",
                  }}
               >
                  <div className="p-5 lg:mt-4">
                     <h3 className="text-gray-200 text-xl font-semibold ">
                        MAY 2023
                     </h3>
                     <h3 className="text-gray-50 text-2xl font-bold mt-1 mb-2">
                        The CryptoBros
                     </h3>
                     <p className="text-gray-200 fontSfReg md:mr-5">
                        The CryptoBros our primiere collection od 8,888 PFPs
                        that serve as a membership card to utility and perks
                        available exclusively to the Brotherhood.
                     </p>
                     <button className="bg-white text-gray-950 rounded-lg px-3 py-1 mt-3">
                        Learn More
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OurCollection;
