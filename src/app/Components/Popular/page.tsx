"use client"
// Next.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// animination
import AOS from "aos";  
import "aos/dist/aos.css"; 
// sanity 
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function Popular(){

const [popular, Setpopulars]= useState([])

useEffect(() => {
    AOS.init({duration: 800}) 

  
const fetchpopular= async () => {
    try{
        const fetchedPopulars = await client.fetch(groq`*[_type == 'Popular']`)
        Setpopulars(fetchedPopulars);
}catch(error){
    console.log("error")
};
}
fetchpopular();
  })
return(
        <main className="pt-[65px] pl-[2px] ">

     <div className="pt-[60px] pl-[40px] text-[#2A254B] ">
        <h1 className="text-black text-2xl font-bold">Our Popular Products</h1>
     </div>

     {/* pictures */}
        <div className="flex">
        {
            popular.map((popular: any , index: number) => {
              const imageurl= popular.images[0]?.asset?
                urlFor( popular.images[0].asset).url() :  "no image";

                return (
                    <Link key={index} href={`/popular/`}>
                        <div className="flex flex-col w-[370px] pl-[30px] pt-[40px] transition-transform duration-800 ease-in-out hover:scale-105"> 
                        <Image 
                        src={imageurl}
                        alt="no image"
                        width={370}
                        height={370}>
                        </Image>
                        </div>
                        <p className="m-[40px] mb-[10px]"> {popular.name}</p>
                        <p className="m-[40px] mb-[10px]"> {popular.price}</p>

                    </Link>
                 )
           
           
           })}

         
           

        </div>
        <div className="flex justify-center  pt-[50px] pb-[30vh] ">
            <button className=" bg-[#F9F9F9] items-center  p-[10px] w-[150px]" >View collection</button>
        </div>
        </main>

)}
