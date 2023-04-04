import React, { useState } from "react";
import OurCollection from "./OurCollection/OurCollection";
import TheHodlerGame from "./TheHodlerGame/TheHodlerGame";
import ApplyFor from "./ApplyFor/ApplyFor";
import Noanimal from "./NoAnimal/Noanimal";
import Banner from "./Banner/Banner";
import Sliders from "./Slider/Slider";
import Hodleadrabord from "./Hodleadrabord/Hodleadrabord";
import StringthNumber from "./StringthNumbers/StringthNumber";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import SideMenu from "../../Components/SideMenu/SideMenu";


const Home = () => {
   const [menu, setMenu] = useState(false);
   return (
      <div
         className="relative overflow-hidden"
         style={{ background: "#000000 0% 0% no-repeat padding-box" }}
      >
         <Navbar menu={menu} setMenu={setMenu} />
         <SideMenu menu={menu} setMenu={setMenu} />
         <Banner />
         <Sliders />
         <OurCollection />
         <TheHodlerGame />
         <Hodleadrabord />
         <Noanimal />
         <ApplyFor />
         <StringthNumber />
         <Footer />
      </div>
   );
};

export default Home;
