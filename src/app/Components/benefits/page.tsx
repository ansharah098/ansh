"use client"
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Benefits() {

  const [Benefits, setBenefits] = useState([])
  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const fetchedProduct = await client.fetch(groq`*[_type == 'Benefits']`)
        setBenefits(fetchedProduct);
      } catch (error) {
        console.log("Error!!")
      }
    }
    fetchproduct()

  })
  return (
    <section>
      <div>

        {
          Benefits.map((benefits: any, index: number) => {
            return (
              <a key={index} href="/benefits/">

                <div className=" bg-[#F9F9F9] w-full h-[70vh] flex justify-center items-center  ">
                  <div className=" bg-white w-full h-[55vh] flex justify-center ">
                    <h1 className=" text-[#2A254B] text-4xl mt-[70px]"> {benefits.name} </h1>
                    <p className="pt-[120px] absolute"> {benefits.Description} </p>

                  

                <div className="absolute mt-[200px]">
                  <input type="text" placeholder="Enter your email" className=" bg-[#F9F9F9] pl-[10px] placeholder:pl-[2px] w-[400px] h-[60px]" />
                  <button className="pl-[10px] text-white bg-[#2A254B] w-[100px] h-[60px]">Singup</button>
                </div>
                </div>
                </div>
              </a>
            )
          })}

      </div>
    </section>
  )
}
