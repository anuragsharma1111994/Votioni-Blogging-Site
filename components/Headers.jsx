import React, { useContext } from "react";
import Link from "next/link";

const categories = [
    {
        
    }
] 

const Headers = () => {
  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block ">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
                VotiTech
            </span>
          </Link>
          <div className="hidden md:float-left md:contents">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
