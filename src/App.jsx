import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from"./Component/Navbar";
function App(){
  return(<>
  <Navbar/>
  <BrowserRouter>
  <Routes>
    <Route>
    
    </Route>
  </Routes>
  </BrowserRouter>
  </>)
}
export default App;