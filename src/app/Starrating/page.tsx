"use client"
import { useState } from "react";
import { CiStar } from "react-icons/ci";

export default function Star() {
    const [rating, Setrating] = useState (0);
    const [hover, Sethover] = useState (0);
    return(
        <div className="flex" >
            {[...Array(5)].map((star, index)=>{
                const currentrating = index + 1
                return(
                    <div key={currentrating} > 
                    <input type="radio" name="rating" value={currentrating} 
                    onClick={() =>  Setrating(currentrating)} 
                    style={{display:"none"}}/>
                    <CiStar color={ currentrating  <= ( hover || rating) ? "yellow": "gray"}
                    onMouseEnter={() => Sethover(currentrating) }
                    onMouseLeave={() => Sethover(index + 1)}

                    />
                    </div>
                )
            })} 

</div>
    )
} 

// "use client"
// import { useState } from "react";
// import { CiStar } from "react-icons/ci";

// export default function Star() {
//     const [rating, Setrating] = useState (0);
//     const [hover, Sethover] = useState (0);
//     return(
//         <div >
//             {[...Array(5)].map((star, index)=>{
//                 const currentrating = index + 1
//                 return(
//                     <div key={currentrating}> 
//                     <input type="radio" name="rating" value={currentrating} 
//                     onChange={() =>  Setrating(currentrating)} 
//                     style={{display:"none"}}/>
//                     <CiStar color={rating >= currentrating  || hover == currentrating ? "yellow": "gray"}
//                     onMouseEnter={() => Sethover(currentrating) }
//                     onMouseLeave={() => Sethover(0)}

//                     />
//                     </div>
//                 )
//             })} 

// </div>
//     )
// } 