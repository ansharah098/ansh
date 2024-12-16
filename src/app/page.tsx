import Image from "next/image";
import Header from "./Components/Header/page";
import Body from "./Components/Body/page";
import Brand from "./Components/Brand/page";
import Ceramices from "./Components/Ceramices/page";
import Popular from "./Components/Popular/page";
import Benefits from "./Components/benefits/page";
import Global from "./Components/Global/page";
import Footer from "./Components/footer/page";
export default function Home() {
  return (
    <div>
      < Header />
      <Body />
      <Brand />
      <Ceramices />
      <Popular />
      <Benefits />
      <Global />
      <Footer />
    </div>
  );
}
