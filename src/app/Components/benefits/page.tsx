import React from "react";

export default function Benefits(){
    return(
        <section>
            <div >
            <div className=" bg-[#F9F9F9] w-full h-[70vh] flex justify-center items-center  ">   
          <div className=" bg-white w-full h-[55vh] flex justify-center  ">
            <h1 className=" text-[#2A254B] text-4xl mt-[70px]"> Join the club and get the benefits</h1>
            <p className="pt-[120px]  absolute"> Sign up for our newsletter and receive exclusive offers on new</p>
          <p  className="pt-[140px]  absolute">ranges, sales, pop-up stores, and more.</p>
<div className="absolute pt-[210px]">
             <input type="text" placeholder="Enter your email" className=" bg-[#F9F9F9] pl-[10px] placeholder:pl-[2px] w-[400px] h-[60px]" />
            <button className="pl-[10px] text-white bg-[#2A254B] w-[100px] h-[60px]">Singup</button>
             </div>
          </div>
          
            </div>
            </div>
        </section>
    )
}
