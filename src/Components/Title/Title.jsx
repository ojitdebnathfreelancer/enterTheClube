import React from "react";

const Title = ({ title, classes }) => {
   return (
      <div className="max-container">
         <h1
            className={`uppercase  lg:text-[38px] md:text-[28px] text-[22px] text-white ${classes} pb-5`}
         >
            {title}
         </h1>
      </div>
   );
};

export default Title;
