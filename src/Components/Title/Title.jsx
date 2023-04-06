import React from "react";

const Title = ({ title, classes }) => {
   return (
      <div className="max-container">
         <h4
            className={`uppercase font-redunReg lg:text-heading md:text-[32px] text-[26px] text-white ${classes} `}
         >
            {title}
         </h4>
      </div>
   );
};

export default Title;
