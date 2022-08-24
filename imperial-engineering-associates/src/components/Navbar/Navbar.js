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
            smooth={true}
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
            smooth={true}
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
              smooth={true}
              offset={-50}
              onClick={closeMenu}
              duration={100}
            >
              About Us
            </Link>
            <Link
              to="chairman"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              Message from Chairman
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              Our Team
            </Link>
            <Link
              to="clients"
              spy={true}
              smooth={true}
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
            smooth={true}
            offset={0}
            onClick={closeMenu}
            duration={300}
          >
            Our Services
          </Link>
        </div>
        <div className="navs-item" >
          <Link
            to="training"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={closeMenu}
          >
            Training
          </Link>
        </div>
        <div className="navs-item" >
          <Link
            to="recruitment"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={closeMenu}
          >
            Recruitment
          </Link>
        </div>
        <div className="navs-item" >
          <Link
            to="contacts"
            spy={true}
            smooth={true}
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
