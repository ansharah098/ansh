"use client"
import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TbBrackets } from "react-icons/tb";

import Link from "next/link";

export default function Header(){
    return(
        <main>
          <div className=" p-3  w-full h-full ">
        <div className="flex justify-between items-center p-[10px]" >
          
            <CiSearch className=" w-[25px] h-[25px]  " />
            
            <div>
                <h1 className="text-[#22202E] text-[25px] ">Avion</h1>
            </div>
            <div className="flex space-x-3  ">
            <Link href="/Cart" className="flex items-center space-x-1">
            <AiOutlineShoppingCart className=" w-[25px] h-[25px]" />
            <span className="relative bottom-[15px] text-center right-[15px] bg-red-500 rounded-3xl w-[18px] h-[20px]">0</span>
            </Link>
            <Link href="/SingIn">
            <MdOutlineAccountCircle className=" w-[25px] h-[25px]"/>
            </Link>
            
            <select>
                <option>Pricing</option>
                <option> 300</option>
                <option> 400</option>
                <option> 500</option>
                <option> 600</option>
                <option> 700</option>
                <option> 800</option>
            </select>
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
