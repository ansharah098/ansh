"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { json } from "stream/consumers"

export default function comment () {
    const [comments, setComment] = useState<{name: string, comment: string}[]>(()=>{
        const storedcommrents = localStorage.getItem("comments")
        return storedcommrents ? JSON.parse(storedcommrents) : []
    })
    const [currentComment, setCurrentComment] = useState ('')
    const [currentName, setCurrentname] = useState ('')

    useEffect(() => {
        if(comments.length> 0){
            localStorage.setItem("comments",JSON.stringify(comments))
        }
    }, [comments])
    const handleSubmit = async () => {
        if (currentComment !== "" && currentName !== "") {
            setComment([...comments,{ name: currentName,comment : currentComment}])
            setCurrentComment('');
            setCurrentname('');
        }
    }
    return(
        <div> 
        <h1  className="mt-[30px] text-xl font-bold text-center mb-[60px]">Comment Section</h1>
        <br />
 <label>Comment :</label>
 <br />
        <input type="text" 
        placeholder="Write your thought"
        className="w-[700px] h-[100px] outline-none border border-b-blue-500  pl-[30px] mb-[30px]"
        onChange={(event) => setCurrentComment(event.target.value)}/>
<br />
 <label >Your name :</label>
 <br />
 <input type="text" 
        placeholder="Your name"
        className="w-[700px] h-[60px] outline-none border border-b-blue-500 mt-[20px] pl-[30px] "
        onChange={(event) => setCurrentname(event.target.value)}/>

<div className="mt-[20px] "> 
        <button onClick={handleSubmit} className="bg-blue-800 w-[90px] h-[40px]"> submit </button>
        </div>
<div>
    <h1 className="mt-[30px] mb-[30px]  text-xl font-bold">Comments :</h1>
    <ul> 
    {
        comments.map((commentObj,index) =>(
            <li key={index} >
                <div className="border border-2 border-b-gray-500 mt-[20px] mb-[20px] w-[400px] h-[100px]">
           <h1 className="text-xl font-bold">{commentObj.name}</h1>
            <p> {commentObj.comment}</p>
            </div>
            </li>
           
        ))}
    </ul>
</div>
        </div>
    )
}










