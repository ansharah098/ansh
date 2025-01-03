import Image from "next/image";
import Body from "./Components/Body/page";
import Brand from "./Components/Brand/page";
// import Products from "./Details/[products]/page";
import Popular from "./Components/Popular/page";
import Benefits from "./Components/benefits/page";
import Global from "./Components/Global/page";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import CommentSection from "./Components/comment/page";
import Ceramices from "./ceramices/page";
// import Ship from "@/Shipping/page";
 export default async function Home() {

  const  Products = await client.fetch ( groq `*[_type=="Products"]`)
  return (
    <div>
  
      <Body />
       <Brand />
     < Ceramices />
      <Popular />
      <Benefits />
       <Global />
       < CommentSection />

    </div>
  );
}
