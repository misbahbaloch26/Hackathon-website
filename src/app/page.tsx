import Image from "next/image";
import Topheader, { Header } from "./components/Header";

import HomeContent, { BestProducts } from "./components/HomeContent";
import TopHeader from "./components/Header";
import SignIn from "./SignIn/page";
import Feature from "./components/Feature";
import GearUp from "./components/GearUp";
import DontMiss from "./components/DontMiss";
import TheEssentials from "./components/TheEssentials";
import ByeBye from "./components/ByeBye";
import ProductDetail from "./components/ProductDetail";





export default function Home() {
  return (
   <div>
   
    <HomeContent/>
    <BestProducts/>
    <Feature/>
    <GearUp/>
    <DontMiss/>
    <TheEssentials/>
    <ByeBye/>
   
  </div>
  );
}
