import React from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Banner from "./Components/Banner";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
    </div>
  );
}

export default App;
