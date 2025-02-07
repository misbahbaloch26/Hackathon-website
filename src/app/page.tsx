
import HomeContent, { BestProducts } from "./components/HomeContent";

import Feature from "./components/Feature";
import GearUp from "./components/GearUp";
import DontMiss from "./components/DontMiss";
import TheEssentials from "./components/TheEssentials";
import ByeBye from "./components/ByeBye";




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
