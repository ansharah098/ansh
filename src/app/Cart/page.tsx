import React from "react";
 export default function Cart(){
    return(
        <main>
            <div>

            <div className=" mt-[40px] bg-gray-200 ">
                <div className="w-full h-[800px]">
            <div className="w-full">
                <h1 className="text-3xl pt-[50px] pl-[120px]"> Your Shopping Cart</h1>
            </div>
      {/* Product  */}
            <div className="flex gap-4 pt-[50px] pl-[150px]">
            <div className="flex flex-col w-[300px] h-[500px]">
                <h1 className="font-bold text-xl">Products</h1>
                <div className="flex "> 
                <img className="w-[120px] h-[130px] pt-[20px]"src="Product Image (1).png" alt="no image" />
            <div className=" pt-[20px] pl-[20px]"> 
                <h2 className="text-xl">  Graystone vase</h2>
                <p className="pt-[10px]">    A timeless ceramic vase with a tri-color grey glaze.</p>
                <p> $85 </p>
                </div>
                </div>

                <div className="flex "> 
                <img className="w-[120px] h-[130px] pt-[20px]"src="Product Image.png" alt="no image" />
            <div className=" mt-[20px] pl-[20px]"> 
                <h2 className="text-xl"> Basic white Vase</h2>
                <p className="mt-[10px]">Beautiful and simple, this is one for the classics.
                </p>
                <p> $85 </p>
                </div>
                </div>
            </div>

            {/* Quality */}
        
            <div className=" flex flex-col w-[300px] h-[500px]">
            <div className="ml-[20px]">
            <h1  className="font-bold text-xl">Quantity</h1>
            <p className="mt-[60px] ml-[40px]">1</p>
            <p className="mt-[105px] ml-[40px]">1</p>
            </div>
            </div>

               {/* Total  */}
           
        
            <div className=" flex flex-col w-[300px] h-[500px]">
                <div className="ml-[20px]">
            <h1  className="font-bold text-xl">Total</h1>
            <p className="mt-[60px]">$85</p>
            <p className="mt-[105px]">$85</p>
            </div>
            </div>
            </div>
            <div className=" mr-[200px]">
            <div className="flex justify-end ">
                <h1 className="text-xl ">Sub Total</h1>
                <h1 className="font-bold text-xl ml-[10px]">$210</h1>
                </div>
                <p className="mt-[10px] ml-[820px]">Taxes and shipping are calculated at checkout</p>
                <button className="mt-[10px] ml-[900px] bg-[#2A254B] w-[250px] h-[70px] text-white">Go to CheckOut </button>
                </div>
            </div>
            </div>
            </div>
           
        </main>
    )
 } 