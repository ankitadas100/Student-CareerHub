import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from"./Component/Navbar";
import Hero from "./Component/Hero"
function App(){
  return(<>
  <Navbar/>
  <Hero/>
  <BrowserRouter>
  <Routes>
    <Route>
    
    </Route>
  </Routes>
  </BrowserRouter>
  </>)
}
export default App;