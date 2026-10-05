import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Home from "./Component/Home";
import Footer from "./Pages/Footer";
import CareerGuide from "./Component/CareerGuide";

import Resources from "./Pages/Resources";
import Works from "./Pages/Works";
import FinalCTA from "./Pages/FinalCTA";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Opportunities from "./Pages/Opportunities";
import OpportunityDetails from "./Component/OpportunityDetails";
import About  from "./Component/About";
import StudentProfile from "./Pages/StudentProfile";
import StudentDashboard from "./Pages/StudentDashboard";
import MyApplications from "./Pages/MyApplications";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={
          <>
            <Hero />
           
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
    <Route
    path="/about"
    element={<About />}
/>
 <Route
    path="/resources"
    element={<Resources />}
/>
<Route
    path="/career-guide"
    element={<CareerGuide />}
/>
<Route
    path="/profile"
    element={<StudentProfile />}
/>
<Route
    path="/student-dashboard"
    element={<StudentDashboard />}
/>
<Route
    path="/my-applications"
    element={<MyApplications />}
/>
        

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;