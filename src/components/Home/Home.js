import "./Home.css";
import Img1 from "../../Images/Budhha Airlines Building 4.jpeg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ImPointRight, ImPointLeft } from "react-icons/im";
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
const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <>
      <div className="home" id="home">
        <img src={Img1} alt="Img1" />
        <div className="home-content">
          <div className="message">
            <FaQuoteLeft size={25} />
            <h2>Let's Build Our Dream Together</h2>
            <FaQuoteRight size={25} />
          </div>
          <button className="home-contact">
          <Link
            to="contacts"
            spy={true}
            smooth='easeInOutQuint'
            offset={-100}
            onClick={closeMenu}
            duration={500}
          >
              <ImPointRight size={20} style={{ verticalAlign: "bottom" }} />
              Let's Talk
              <ImPointLeft size={20} style={{ verticalAlign: "middle" }} />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
