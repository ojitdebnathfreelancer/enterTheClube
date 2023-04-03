import React from "react";
import OurCollection from "./OurCollection/OurCollection";
import TheHodlerGame from "./TheHodlerGame/TheHodlerGame";
import ApplyFor from "./ApplyFor/ApplyFor";
import Noanimal from "./NoAnimal/Noanimal";
import Banner from "./Banner/Banner";

const Home = () => {
   return (
      <div
         className=""
         style={{ background: "#000000 0% 0% no-repeat padding-box" }}
      >
         <Banner />
         <OurCollection />
         <TheHodlerGame />
         <Noanimal />
         <ApplyFor />
      </div>
   );
};

export default Home;
