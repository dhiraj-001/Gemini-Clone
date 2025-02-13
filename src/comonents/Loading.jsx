import logo from "../imgs/logo.png"
import React from 'react';


const LoadingSpinner4 = ({text}) => {
  return (
    <div className="flex flex-col items-start m-8">
     <div class="relative flex justify-center items-center">
    <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    <img src={logo}  class="rounded-full h-28 w-28"/>
</div>
<span className="text-2xl mt-4 font-body text-gradient">
  {text}
</span>
    </div>
  );
};

export default LoadingSpinner4;
