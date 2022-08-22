import FooterBar from "./FooterBar";
import FooterBottom from "./FooterBottom";
import "./Footer.css";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import {
    FaFacebook,
    FaInstagramSquare,
    FaLinkedin,
  } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Map from "./Map";

const Footer = () => {
  return (
    <footer>
      <FooterBar />
      <div className="footer">
        <div className="links">
          <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#">Our Company</a>
                <ul>
                  <li>
                    {" "}
                    <a href="#"> About Us </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Message from Chairman </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Our Team </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Our Clients </a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="#"> Our Services</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Training</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Recruitment</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Contact Us</a>{" "}
              </li>
            </ul>
        </div>
        <div className="footer-contacts">
          <h3>Get Connected</h3>
          <p>
            Please let us know if you have any queries or concerns. We are always ready at your service.
          </p>
          <div className="contact-links">
            <a href="#"> <FaFacebook size={23} /> </a>
            <a href="#"> <AiFillTwitterCircle size={23} /> </a>
            <a href="#"> <FaInstagramSquare size={23} /> </a>
            <a href="#"> <FaLinkedin size={23} /> </a>

          </div>
          

        </div>
        <div className="map">
          <h3>Visit Us</h3>
          <Map />
        </div>
      </div>

      <div className="sticky-top">
        <a href="#">
          <BsFillCloudArrowUpFill fill="green" size={40} />
        </a>
      </div>
      <FooterBottom />

    </footer>
  );
};

export default Footer;
