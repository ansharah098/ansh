
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

export default function Ceramices(){

const [Product, Setproduct]= useState([])

useEffect(() => {
    AOS.init({duration: 800}) 

  
const fetchproduct= async () => {
    try{
        const fetchedProduct = await client.fetch(groq`*[_type == 'products']`)
        Setproduct(fetchedProduct);
}
catch(error){
    console.log("error")
};
}
fetchproduct();
  })
return(
        <main className="pt-[65px] pl-[2px] ">

     <div className="pt-[60px] pl-[40px] text-[#2A254B] ">
        <h1 className="text-black text-2xl font-bold">Ceramises</h1>
     </div>

     {/* pictures */}
        <div className="flex">
        {
            Product.map((product: any , index: number) => {
              const imageurl= product.images[0]?.asset?
                urlFor( product.images[0].asset).url() :  "no image";

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
                        <p className="m-[40px] mb-[10px]"> {product.name}</p>
                        <p className="m-[40px] mt-[0px]"> {product.price}</p>
                    </Link>
                
                 )
           
           
           })}

         
           

        </div>
        <div className="flex justify-center  pt-[50px] pb-[30vh] ">
            <button className=" bg-[#F9F9F9] items-center  p-[10px] w-[150px]" >View collection</button>
        </div>
        </main>

)}
