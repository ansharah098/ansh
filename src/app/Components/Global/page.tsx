import React from "react";

export default function Global (){
    return(
        <section>
        <div className="flex justify-between">
         <div className="pt-[150px] pl-[50px]">
            <h1 className=" text-2xl">From a studio in London to a global brand with <br /> over 400 outlets</h1>
           <h2 className=" text-xl pt-[20px] pb-[20px]"> When we started Avion, the idea was simple. Make high-quality furniture <br />affordable and available for the mass market.</h2>
         <p className=" text-lg">  Handmade and lovingly crafted furniture and homeware is what <br /> we live, <br />
         breathe, and design, so our Chelsea boutique became the <br /> hotbed for the <br />
         London interior design community.</p>
         <div className=" pt-[90px]">
         <button className=" bg-[#F9F9F9] items-center p-[10px] h-[60px] w-[150px] ">Get in touch</button>
         </div>
         </div>
         <div className="pt-[100px]">
            <img src="Image.png" alt="no image" className="transition-transform duration-800 ease-in-out hover:scale-110"/>
         </div>
        </div>
        </section>
    )
}