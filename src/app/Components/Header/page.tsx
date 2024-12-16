"use client"
import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Header(){
    return(
        <main>
          <div className=" p-3  w-full h-full ">
        <div className="flex justify-between p-[10px]" >
          
            <CiSearch className=" w-[25px] h-[25px]  " />
            
            <div>
                <h1 className="text-[#22202E] text-[25px] ">Avion</h1>
            </div>
            <div className="flex space-x-3  ">
            <Link href="/Cart">
            <AiOutlineShoppingCart className=" w-[25px] h-[25px]" />
            </Link>
            <Link href="/SingIn">
            <MdOutlineAccountCircle className=" w-[25px] h-[25px]"/>
            </Link>
            </div> 
        </div>
       <hr  />
       <div className="flex space-x-6 justify-center p-[20px] text-[#505977] absolute left-[400px]">
        <p>Plant pots</p>
        <p>Ceramices</p>
        <p>Tables</p>
        <p>Chairs</p>
        <p>Crockery</p>
        <p>Tablewear</p>
        <p>Cutlery</p>
       </div>
        </div>
        </main>
    )
}
