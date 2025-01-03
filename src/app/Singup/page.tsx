"use client"
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";

import Link from "next/link";
import { FaEye } from "react-icons/fa";

import { FaUserAlt } from "react-icons/fa";


export default function SingUp () {
    const [Name, SetName]= useState('')
    const [Email, SetEmail]= useState('')
    const [Password, SetPassword]= useState('')
     function testsingup() {
        console.log(Name,Email,Password)
    }
return(
    <section>
        <div className="flex justify-center h-[800px] bg-gray-100 ">
        <div className=" flex w-100 bg-white h-[700px] mt-[60px] ">
        <div>
       <img src="office-620822_640.jpg" className="w-[500px] h-[700px] " alt="no image" />
        </div>

        <form className=" w-[500px] h-[500px]">
         <h1 className="text-3xl font-bold text-center pt-[20px]"> Sing UP</h1>

         
        
         <div className="pt-[40px] ">
         <label className="text-xl pl-[30px] mb-[5px]">Your name</label>
         <br />
         <div className="rounded-xl pt-[10px] relative"> 
         <input type="text" className="ml-[30px]  border border-b-gray pt-[10px] w-[90%] h-[60px] pl-[50px] rounded-full outline-none " placeholder="Your name" required
         value={Name} onChange={(event) => SetName(event.target.value)}/>
        <FaUserAlt  className=" absolute top-[48%] left-[45px] w-[16px] h-[16px]"/>
    
         

         </div>
         </div>

         <div className="pt-[40px] ">
         <label className="text-xl pl-[30px]">email</label>
         <br />
         <div className="rounded-xl pt-[10px] "> 
         <input type="email" className="ml-[30px] border border-b-gray pt-[10px] w-[90%] h-[60px] pl-[50px] rounded-full outline-none " placeholder="Email" required
         value={Email} onChange={(event)=>SetEmail(event.target.value)}/>
        
            < MdOutlineMailOutline  className=" absolute top-[69%] left-[726px] w-[16px] h-[16px]"/>
         

         </div>
         </div>

           
         <div className="pt-[40px] ">
         <label className="text-xl pl-[30px] mb-[5px]">Password</label>
         <br />
         <div className="rounded-xl pt-[10px] relative"> 
         <input type="password" className="ml-[30px]  border border-b-gray pt-[10px] w-[90%] h-[60px] pl-[50px] rounded-full outline-none " placeholder="Password" required
         value={Password} onChange={(event) => SetPassword(event.target.value)}/>
       
       
        <TbPasswordUser className=" absolute top-[48%] left-[45px] w-[16px] h-[16px]"/>


    
         

         </div>
         </div>
         <div className="flex justify-center pt-[50px] ">
          
         <button onClick={testsingup} className="text-white w-[400px] text-xl rounded-full h-[50px] bg-[#2A254B]">Singup</button>
         </div>
         <div className="flex justify-center pt-[10px]">
         <p>Already have an account?</p> 
         <Link className="hover:text-blue-500" href="/SingIn">SingIn</Link>
         </div>
        </form>
        </div>
        </div>
    </section>
)
}