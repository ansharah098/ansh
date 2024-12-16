import React from "react";

export default function Body(){
    return(
        <main>
            <div className=" m-[30px] mt-[90px] bg-[#2A254B] ">
     <div className="flex justify-between  ">
     <div className="p-[40px]  "> 
     <h1 className="text-white text-2xl font-bold mb-[60px]"> The furniture brand for the future with <br /> the timeless designs</h1>
     <div className="">
     <button className="text-white font-bold border-gray-500 border-2 w-[176px] h-[56px] mb-[110px] ">
            view collection
        </button>
        </div>
        <p className="text-white mt-[100px]">  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.</p>
       
      </div>
        <div className="flex items-right">
        <img className="w-[520px] h-[584px]" src="Right Image.png" alt="No image" />
        </div>
       
        </div>
        </div>
        
        </main>
    )
}