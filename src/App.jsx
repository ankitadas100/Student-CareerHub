import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from"./Component/Navbar";
import Hero from "./Component/Hero";
import Home from"./Component/Home";
import Resources from "./Pages/Resources";
import Works from "./Pages/Works";
import FinalCTA from "./Pages/FinalCTA";
import Footer from "./Pages/Footer";
function App(){
  return(<>
  <Navbar/>
  <Hero/>
  <Home/>
  <Resources/>
  <Works/>
  <FinalCTA />
  <Footer/>
  <BrowserRouter>
  <Routes>
    <Route>
    
    </Route>
  </Routes>
  </BrowserRouter>
  </>)
}
export default App;