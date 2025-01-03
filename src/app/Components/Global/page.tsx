"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Global (){
    const [Global, setGlobal] = useState ([]);
    useEffect(()=>{
        const fetchGlobal = async () => {
            try {
                const fetchedGlobal = await client.fetch(groq`*[_type == "Lower"]`)
                setGlobal(fetchedGlobal);
            }
            catch(error){
                console.log("Error");
            }
        }
        
        fetchGlobal()
    },[])
    return(
        <section>
           
                {
              Global.map((lower:any, index: number)=>{
                                    const imageUrl = lower.images[0]?.asset?
                                    urlFor(lower.images[0].asset).url() : "no image"
                                    return(
                                    <Link key={index} href={`/lower/`}> 
                <div className="flex justify-between pr-[10px]">
                     <div className="pt-[150px] pl-[50px]">
                        <h1 className=" text-2xl">{lower.name}</h1>
                        <h1 className=" text-2xl">{lower.Heading2}</h1>

                       <p className=" text-xl pt-[20px] pb-[20px]">{lower.Description}</p>
                       <p className=" text-xl pt-[20px] pb-[20px]">{lower.Description2}</p>
                       <p className=" text-xl pt-[20px] pb-[20px]">{lower.Description3}</p>
                       


                    <div className=" pt-[90px]">
                     <button className=" bg-[#F9F9F9] items-center p-[10px] h-[60px] w-[150px] ">Get in touch</button>
                     </div>
                     </div>
                   < Image 
                    className="pt-[100px] transition transform duration-800 ease-in-out hover:scale-105"
                    src={imageUrl}
                    alt="no image"
                    width={600} 
                    height={0}
                    /> 
                    </div>
                    
                </Link>
               
                  )
                })}
        </section>
    )
}
