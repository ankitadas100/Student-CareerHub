import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Home from "./Component/Home";
import Footer from "./Pages/Footer"

import Resources from "./Pages/Resources";
import Works from "./Pages/Works";
import FinalCTA from "./Pages/FinalCTA";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Opportunities from "./Pages/Opportunities";
import OpportunityDetails from "./Component/OpportunityDetails";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={
          <>
            <Hero />
            <Home />
            <Resources />
            <Works />
            <FinalCTA />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/opportunities" element={<Opportunities />} />
       <Route
    path="/opportunity-details/:id"
    element={<OpportunityDetails />}
/>
        

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;