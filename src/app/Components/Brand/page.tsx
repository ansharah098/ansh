"use client"
import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
export default function Brand (){

  const [Brand, setBrand] = useState ([])
  useEffect (()=>{
  const fetchbrand = async () => {
    
      try{
        const fetchedbrand =  await client.fetch (groq`*[_type == 'Brand']`);
        setBrand(fetchedbrand);

    }
    catch(error){
      console.log("error")
    }
  }
    fetchbrand()
    });
  return (
    <main>   
    <div className="flex justify-center p-[4px]">
  <h1 className="font-bold text-2xl mt-[100px]">
    What makes our brand diffrent
  </h1>
  </div>
 
  <div className="flex justify-between gap-8 mt-12 ">

  {
    Brand.map ((brand:any , index:number )=>{
      return (
      <Link key={index} href={"/brand/"}>
         <div className="flex flex-col  p-6 rounded-lg w-[270px]">
         <TbTruckDelivery />
         <IoIosCheckmarkCircle />
         <MdOutlinePriceChange />
         <LuSprout />

      <h1 className="font-bold text-black text-xl text-center " >{brand.name}</h1>
      <p className="mt-[20px] text-[#2A254B] text-center">{brand.Description}</p>
   
    </div>
      </Link>
      )
    })}

</div>
  </main>
    )
}

