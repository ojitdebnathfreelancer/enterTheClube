import React from 'react';
import Title from '../../../Components/Title/Title';
import img from '../../../assets/Honorary/Luca Netz.jpg'
import img1 from '../../../assets/Honorary/Keung.png'
import img2 from '../../../assets/Honorary/Jack Butcher.png'
import img3 from '../../../assets/Honorary/Deeze.png'

const Hodleadrabord = () => {
    return (
      <div className="md:mt-24 mt-16 px-4 text-white">
        <div className="max-container ">
          <Title title={"HODLEADERBOARD"} classes={"text-center"} />
          <div className="lg:w-[880px] mx-auto flex justify-between items-center border-b py-2">
            <div className="flex justify-center items-center gap-4">
              <p>1</p>
              <img className="h-14 w-14 rounded-full" src={img} alt="img" />
              <h2 className="fontSfBold">dontfadeanon.eth</h2>
            </div>
            <div className="h-14  relative w-[190px] ">
              <img
                className="z-0 h-full w-full rounded-full absolute"
                src={img}
                alt="img"
              />

              <img
                className="z-5 h-14 w-14 ml-[25px] rounded-full absolute"
                src={img1}
                alt="img"
              />
              <img
                className="z-10 h-14 w-14 ml-[52px] rounded-full absolute"
                src={img2}
                alt="img"
              />
              <img
                className="z-20 h-14 w-14 ml-[82px] rounded-full absolute"
                src={img3}
                alt="img"
              />
              <img
                className="z-30 h-14 w-14 ml-[108px] rounded-full absolute"
                src={img}
                alt="img"
              />
              <img
                className="z-40 h-14 w-14 ml-[134px] rounded-full absolute"
                src={img2}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hodleadrabord;