import React from "react";

export default function Footer (){
    return(
        <main className="pt-[40px] ">
            <div className=" justify-between bg-[#2A254B]  h-[350px] w-full ">
                <div className="flex space-x-8 pt-10 pl-20">
                {/* 1st coloum */}
                <div className=" text-white pl-[20px] ">
                 <h1 className=" text-xl pb-[10px] ">Menu</h1>
                 <p  className="pb-[10px]">New arrivals</p>
                 <p  className="pb-[10px]">Best Seller</p>
                 <p  className="pb-[10px]">Recently Viewed</p>
                 <p  className="pb-[10px]">Populat this week</p>
                 <p  className="pb-[10px]">All Products</p>

                </div>

                {/* 2nd coloum */}

               <div className="text-white pl-[80px]">               
                <h1 className=" text-xl pb-[10px] "> Catergory</h1>
                 <p className="pb-[10px]">Crockery</p>
                 <p className="pb-[10px]">Furniture</p>
                 <p className="pb-[10px]">Homeware</p>
                 <p className="pb-[10px]">Plants pot</p>
                 <p className="pb-[10px]">Chiar</p>
                </div>

                 {/* 3nd coloum */}
                 <div>
                 <div className="text-white pl-[80px]">               
                <h1 className=" text-xl pb-[10px] ">Our Company</h1>
                 <p className="pb-[10px]">Crockery</p>
                 <p className="pb-[10px]">Furniture</p>
                 <p className="pb-[10px]">Homeware</p>
                 <p className="pb-[10px]">Plants pot</p>
                 <p className="pb-[10px]">Chiar</p>
                </div>
                    </div>

                     {/* 4nd coloum */}
                <div className="  pl-[80px]">
                    <h1 className=" text-xl text-white pb-[10px] ">Join our mailing list</h1>
                    <input type="text" placeholder="Enter your email" className=" bg-[#F9F9F9] pl-[10px] placeholder:pl-[2px] w-[400px] h-[60px]" />
                    <button className="pl-[10px] text-white bg-blue-500 w-[100px] h-[60px]">Singup</button>                    
                    </div>
                    </div>
                    <div className="flex justify-center">
                    <hr className="mt-[30px] w-[90%] border-b-1"/>
                    </div>
                    <p className="pt-[10px] pl-[70px] text-sm text-white">Copyright 2022 Avion LTD</p>

            </div>
        </main>
    )
}