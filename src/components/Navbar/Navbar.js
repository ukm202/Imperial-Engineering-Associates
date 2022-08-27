import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaBars } from "react-icons/fa";

import { BiSearch } from "react-icons/bi";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useState } from "react";
import { Link as Atag, useNavigate } from "react-router-dom";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="searchBox">
        <input type="search" placeholder="How Can We Help You?" />
      </div>
      <div className="burger" onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ verticalAlign: "middle" }} /> ):
            (<FaBars margin="0" size={30} style={{ verticalAlign: "middle" }} /> )
        }
        
      </div>

      <div className={click ? "navs active": "navs"}>
        <div className="navs-item" >
          <Link
            to="home"
            spy={true}
            // smooth='easeInOutQuint'
            offset={-100}
            onClick={closeMenu}
            duration={500}
          >
            Home
          </Link>
          
        </div>
        <div className="dropdown navs-item">
          <Link
            to="company"
            spy={true}
            // smooth='easeInOutQuint'
            offset={-100}
            onClick={closeMenu}
            
          >
            Our Company
            <IoMdArrowDropdown
              size={20}
              style={{ verticalAlign: "middle" }}
            />{" "}
          </Link>
          <div className="dropdown-content">
            <Link
              to="about"
              spy={true}
              // smooth='easeInOutQuint'
              offset={-50}
              onClick={closeMenu}
              duration={100}
            >
              About Us
            </Link>
            <Link
              to="chairman"
              spy={true}
              // smooth='easeInOutQuint'
              offset={-100}
              onClick={closeMenu}
              
            >
              Message from Chairman
            </Link>
            <Link
              to="team"
              spy={true}
              // smooth='easeInOutQuint'
              offset={-100}
              onClick={closeMenu}
            >
              Our Team
            </Link>
            <Link
              to="clients"
              spy={true}
              // smooth='easeInOutQuint'
              offset={0}
              onClick={closeMenu}
              duration={500}
            >
              Our Clients
            </Link>
          </div>
        </div>
        <div className="navs-item" >
          <Link
            to="services"
            spy={true}
            // smooth='easeInOutQuint'
            offset={0}
            onClick={closeMenu}
            duration={200}
            
          >
            Our Services
          </Link>
        </div>
        <div className="navs-item" >
          <Link
            to="training"
            spy={true}
            // smooth='easeInOutQuint'
            offset={-100}
            onClick={closeMenu}
            style={{pointerEvents: 'none'}}
          >
            Training
          </Link>
        </div>
        <div className="navs-item" >
          <Atag
            // onClick={()=> comeBack()}
            to="/recruitment"
            target="_blank"
              // spy={true}
              // smooth='easeInOutQuint'
              // offset={-100}
              // onClick={closeMenu}
              // style={{pointerEvents: 'none'}}
          >
            Recruitment
          </Atag>
        </div>
        <div className="navs-item" >
          <Link
            to="contacts"
            spy={true}
            // smooth='easeInOutQuint'
            offset={-100}
            onClick={closeMenu}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
