"use client"
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { useEffect } from "react";
import AOS from "aos";  
import "aos/dist/aos.css"; 
import { MdOutlinePriceChange } from "react-icons/md";
export default function Chair (){
    const [count, setcount]= React. useState(0)
    useEffect(() => {
      AOS.init({duration: 800}) 
    })
    return(
        <section>
            <div className="flex">
                <div className="  p-[50px]">
                 <img className="w-[800px] h-[800px]" src="Photo (5).png" alt="no image" 
                 data-aos="fade-right"/>
                </div>
                <div className="pt-[90px] pl-[3px]  pr-[80px]">
                <h1 className="font-bold text-2xl"> The Chair </h1>
                <p className="text-xl pt-[10px]">$120</p>
                <div className="text-[#505977]">
                <h1 className="pt-[10px] pr-[50px] font-bold"> Description</h1>
                <p className="pt-[30px]"> A timeless design, with premium materials features as one of our <br /> most popular
                    and iconic pieces. The dandy chair is perfect for any <br /> stylish living space with
                    beech legs and lambskin leather upholstery.
                    </p>
                    <ul className="pt-[25px]">
                        <li>Premium Quality</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>

                    </ul>
                    <h1 className="font-bold pt-[30px] pd-[30px] pb-[30px]">Dimensions</h1>
                    <div className="flex">
                        <div className="flex-col ">
                        <h1> Height</h1>
                        <p>110 cm</p>
                        </div>

                        <div className="flex-col pl-[70px]">
                        <h1> Width </h1>
                        <p>75 cm</p>
                        </div>

                        <div className="flex-col pl-[70px]">
                        <h1> Depth </h1>
                        <p>50 cm</p>
                        </div>
                    </div>
                    <div className="flex">
                    <h1 className="pt-[40px]">Amount:</h1>
                    <div className=" pt-[30px] pl-[10px]">
                    <div className=" bg-[#F5F5F5] rounded-lg space-x-4 h-[40px] w-[100px] flex justify-center items-center">
                    <span className="mr-[20px]">+</span> 1
                    <span>-</span>
                    </div>
                    </div>
                    <button className="mt-[30px] mt-[40px] ml-[170px] w-[150px] h-[50px] text-white bg-[#2A254B]">Add to cart</button>

                    </div>
                </div>
                </div>
            </div>

            <main className="pt-[65px] pl-[2px]">
     <div className="pt-[60px] pl-[40px] text-[#505977] ">
        <h1 className="font-bold text-2xl ">You might also like</h1>
     </div>

     {/* pictures */}
        <div className="flex justify-between">

            {/* picture no # 01 */}
            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px]">
                <img  src="Photo (4).png" alt="no image" 
                />
                <p className="pt-[20px]">The Dendy chair</p>
                <p  className="pt-[20px]">$250</p>
            </div>
                       {/* picture no # 02 */}

            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px]">
                <img  src="Photo (1).png" alt="no image" 
                />
                <p className="pt-[20px]">Rustic Vase Set</p>
                <p  className="pt-[20px]">$155</p>
            </div>
                            {/* picture no # 03 */}

                            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px]">
                <img  src="Photo (2).png" alt="no image" 
                />
                <p className="pt-[20px]">The Silky Vase</p>
                <p  className="pt-[20px]">$125</p>
            </div>
                            {/* picture no # 04 */}

                            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px]">
                <img  src="Photo (3).png" alt="no image" 
                />
                <p className="pt-[20px]">The Lucky Lamp</p>
                <p  className="pt-[20px]">$399</p>
            </div>


        </div>
        <div className="flex justify-center  pt-[50px] ">
            <button className=" bg-[#F9F9F9] items-center  p-[10px] w-[150px]" >View collection</button>
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

        </section>
    )
}