import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import PreLoading from "./Pages/PreLoading/PreLoading";

const App = () => {
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 3000);
   }, [])
   
   return (
      <div>
         {
            loading ?
               <PreLoading />
               :
               <RouterProvider router={router}>
               </RouterProvider>
         }
      </div>
   );
};

export default App;
