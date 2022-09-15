import React from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Banner from "./Components/Banner";
import CunsultingServices from "./Components/CunsultingServices";
import Header from "./Components/Header";
import OurTeam from "./Components/OurTeam";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <OurTeam />
      <CunsultingServices />
      
    </div>
  );
}

export default App;
