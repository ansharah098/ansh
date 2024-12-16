"use client"
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";  
import "aos/dist/aos.css"; 
export default function Popular(){

    const [count, setcount]= React. useState(0)
 useEffect(() => {
   AOS.init({duration: 800}) 
 })


    return(
        <main className="pt-[65px] pl-[2px] ">

     <div className="pt-[60px] pl-[40px] text-[#2A254B] ">
        <h1 className="text-black text-2xl font-bold">Our Popular Products</h1>
     </div>

     {/* pictures */}
        <div className="flex">

            {/* picture no # 01 */}
            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px] transition-transform duration-800 ease-in-out hover:scale-105">
                <img  src="Photo (4).png" alt="no image   " 
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"/>
                <p className="pt-[20px]">The Dendy Chair</p>
                <p  className="pt-[20px]">$250</p>
            </div>
                       {/* picture no # 02 */}
             <Link href="/Dendy"> 
            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px]  transition-transform duration-800 ease-in-out hover:scale-105 ">
                <img  src="Photo (4).png" alt="no image"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"/>
                <p className="pt-[20px]">The Dendy Chair</p>
                <p  className="pt-[20px]">$250</p>
            </div>
            </Link>
                            {/* picture no # 03 */}
             <Link href="/Chair"> 
                            <div className="flex flex-col w-[370px] pl-[30px] pt-[40px]  transition-transform duration-800 ease-in-out hover:scale-105">
                <img  src="Photo (5).png" alt="no image" 
                
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                 />
                <p className="pt-[20px]">The Chair</p>
                <p  className="pt-[20px]">$125</p>
            </div>
            </Link>              

                           

        </div>
        <div className="flex justify-center  pt-[50px] pb-[30vh] ">
            <button className=" bg-[#F9F9F9] items-center  p-[10px] w-[150px]" >View collection</button>
        </div>
        </main>

    )
}

