import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Clients />

      {/* <Router>
        <Routes>
          <Route exact to="/" element={<Home />} />
          <Route to="/about" element={<About />} />
          <Route to="/services" element={<Services />} />
        </Routes>


      </Router> */}
      <Footer />

      
    </div>
  );
};

export default App;
