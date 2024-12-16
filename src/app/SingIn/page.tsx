import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

export default function SingIn () {
return(
    <section>
        <div className="flex justify-center h-[600px] bg-gray-100 ">
        <div className=" flex w-[1000px] bg-white h-[500px] mt-[60px] ">
        <div>
       <img src="office-620822_640.jpg" className="w-[500px] h-[500px] " alt="no image" />
        </div>

        <form className=" w-[500px] h-[500px]">
         <h1 className="text-3xl font-bold text-center pt-[20px]"> Sing In</h1>

         
        
         <div className="pt-[40px] ">
         <label className="text-xl pl-[30px] mb-[5px]">Email</label>
         <br />
         <div className="rounded-xl pt-[10px] relative"> 
         <input type="email" className="ml-[30px]  border border-b-gray pt-[10px] w-[90%] h-[60px] pl-[50px] rounded-full outline-none " placeholder="Email"/>
        <MdOutlineMailOutline  className=" absolute top-[48%] left-[45px] w-[16px] h-[16px]"/>
    
         

         </div>
         </div>

         <div className="pt-[40px] ">
         <label className="text-xl pl-[30px]">Password</label>
         <br />
         <div className="rounded-xl pt-[10px] "> 
         <input type="Password" className="ml-[30px] border border-b-gray pt-[10px] w-[90%] h-[60px] pl-[50px] rounded-full outline-none " placeholder="Password"/>
        
            < FaRegEyeSlash className=" absolute top-[56%] left-[726px] w-[16px] h-[16px]"/>
         

         </div>
         </div>
         <div className="flex justify-center pt-[50px] ">
         <button className="text-white w-[400px] text-xl rounded-full h-[50px] bg-[#2A254B]">Singup</button>
         </div>
         <div className="flex justify-center pt-[10px]">
         <p>Don't have an account?</p> 
         <a href="">SingUp</a>
         </div>
        </form>
        </div>
        </div>
    </section>
)
}