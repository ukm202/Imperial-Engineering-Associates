import FooterBar from "./FooterBar";
import FooterBottom from "./FooterBottom";
import "./Footer.css";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Map from "./Map";

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

const Footer = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <footer id="contacts">
      <FooterBar />
      <div className="footer">
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>
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
            </li>
            <li>
              <Link
                to="company"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={closeMenu}
              >
                Our Company
              </Link>
              <ul>
                <li>
                  {" "}
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    onClick={closeMenu}
                    duration={100}
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="chairman"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    onClick={closeMenu}
                  >
                    {" "}
                    Message from Chairman{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    onClick={closeMenu}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  {" "}
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
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                onClick={closeMenu}
                duration={300}
              >
                Our Services
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="training"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={closeMenu}
              >
                Training
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="recruitment"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={closeMenu}
              >
                Recruitment
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={closeMenu}
                duration={500}
              >
                Contact Us
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="footer-contacts">
          <h3>Get Connected</h3>
          <p>
            Please let us know if you have any queries or concerns. We are
            always ready at your service.
          </p>
          <div className="contact-links">
            <a href="#">
              {" "}
              <FaFacebook size={23} />{" "}
            </a>
            <a href="#">
              {" "}
              <AiFillTwitterCircle size={23} />{" "}
            </a>
            <a href="#">
              {" "}
              <FaInstagramSquare size={23} />{" "}
            </a>
            <a href="#">
              {" "}
              <FaLinkedin size={23} />{" "}
            </a>
          </div>
        </div>
        <div className="map">
          <h3>Visit Us</h3>
          <Map />
        </div>
      </div>

      <div className="sticky-top">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={closeMenu}
          duration={500}
        >
          <BsFillCloudArrowUpFill fill="black" size={40} />
        </Link>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
