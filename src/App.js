import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Recruitment from "./components/Recruitment/Recruitment";
import { useState,useEffect } from "react";


const App = () => {
  const [shouldNavigate, setShouldNavigate] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
        setShouldNavigate(true);
        }, 5000);

        return () => clearTimeout(id);
    }, []);
  return (
    <div>
      
      {/* <Recruitment /> */}
    

      <Router>
        

        <Routes>
          <Route exact path="/" element={
            [
              <Header />,
              <Navbar />,
              <Home />,
              <About />,
              <Services />,
              <Clients />,
              <Footer />


            ]
            } />
           
          
          <Route exact path="/recruitment" element={<Recruitment />} />
        </Routes>


      </Router>

      
    </div>
  );
};

export default App;
