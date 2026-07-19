
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Featured from "./components/feature/Featured"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
    </>
  );
}

export default App;




//" https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-RU3dQiTHwQ2TwNwTcRcAcX3V";