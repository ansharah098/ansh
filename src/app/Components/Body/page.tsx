"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Body(){
    const [Body, setBody]= useState([])
    useEffect(() => {
        const fetchbody = async () => {
            try{
                const fetchedbody = await client.fetch (groq`*[_type == "Body"]`)
                setBody(fetchedbody)
            } catch (error) {
                console.log("error")
            }
        }
          fetchbody()
             
    });


    return(

        <main>

        {
            Body.map((body:any, index:number) => {
              const imageUrl = body.images[0]?.asset?
              urlFor(body.images[0].asset).url() : "no image" 

              return(
               <Link key={index} href={`/Body/`}>
              
    <div className=" ml-[20px] mt-[90px] bg-[#2A254B] ">
     <div className="flex justify-between ">
     <div className="p-[60px]"> 
        <h1 className="text-white text-2xl font-bold mb-[60px] "> {body.name}</h1>
        <p className="text-white text-xl mt-[100px]"> {body.Description}</p>
        <div className="pt-[40px]">
     <button className="text-white font-bold border-gray-500 border-2 w-[176px] h-[56px] mb-[110px] ">
            view collection
        </button>
        </div>
      </div>
      
      <div>
                <Image 
                className="w-[1000px] h-[600px]"
                src={imageUrl}
                alt="no image"
                width = {1000}
                height={1000}
                />
                </div>
       
        </div>
        </div>



               </Link>
              )
              
            })}
           
        
        </main>
    )
}