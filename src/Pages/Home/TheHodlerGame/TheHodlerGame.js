import React from "react";
import Title from "../../../Components/Title/Title";

const TheHodlerGame = () => {
   return (
      <div className="lg:mt-[200px] md:mt-[150px] mt-[50px] px-4">
         <div className="max-container ">
            <Title title={"THe holder game"} classes={"text-center"} />
            <div className="lg:w-[880px] mx-auto">
               <p className="text-center text-gray-300 pb-4">
                  Every season, the Hodler Games bring ten thrilling weeks of
                  high-stakes entertainment and fun through competitive
                  interactive experiences. CryptoBros can join in on the weekly
                  events and compete for the chance to win one of the 10
                  Brodinals by purchasing a HODL pass with $BRO.
               </p>
               <p className="text-center text-gray-300">
                  $BRO can be printed by deploying your CryptoBros into 1/3
                  staking pools. CryptoBro holders will also be eligible to
                  claim our upcoming $BRO airdrop.
               </p>
            </div>
         </div>
      </div>
   );
};

export default TheHodlerGame;
