import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
export default function Brand (){
    return (
    <main>
     
      
    <div className="flex justify-center p-[4px]">
  <h1 className="font-bold text-2xl mt-[100px]">
    What makes our brand diffrent
  </h1>
  </div>

 {/* boxes div */}
  <div className="flex justify-between gap-8 mt-12 ">

       <div className="flex flex-col  p-6 rounded-lg w-[270px]">
          <TbTruckDelivery className="w-[33px] h-[33px]" />
          <h1 className="font-bold text-black text-xl mt-4 ">Next day as standard</h1>
          <p className="mt-[20px] text-[#2A254B]  ">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        <div className="flex flex-col p-6 rounded-lg w-[270px]">
          <IoIosCheckmarkCircleOutline className="w-[33px] h-[33px] text-center" />
          <h1 className="font-bold text-black text-xl mt-4 text-center">Made by true artisans</h1>
          <p className="mt-[20px] text-[#2A254B]">
            Hand-crafted goods made with <br /> real passion and craftsmanship
          </p>
        </div>
   
   <div className=" flex flex-col p-6 rounded-lg w-[250px] ">
  <MdOutlinePriceChange className="w-[33px] h-[33px]" />
<br />
  <h1 className="font-bold text-black text-xl text-center ">Unbeatable prices</h1>
   <p className="mt-[20px] text-[#2A254B] text-center">For our material and quality, you won't find better prices anywhere.</p>
   </div>
   
   <div className="flex flex-col  mr-[30px] p-6 rounded-lg w-[250px] ">
  <LuSprout className="w-[33px] h-[33px]" /> 
<br />
  <h1 className="font-bold text-black text-xl text-center">Recycled packaging</h1>
   <p className="mt-[20px] text-[#2A254B] text-center">We use 100% recycled packaging to ensure our footprint is manageable.</p>
   </div>
  </div>
    
  </main>
    )
}