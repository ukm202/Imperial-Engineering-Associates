import LogoImage from "../../../Images/logo.png";
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


const Logo = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="logo">
      <Link to="home" spy={true} smooth={true} offset={-100} onClick={closeMenu} duration={500} >
        <img src={LogoImage} alt="Logo" />
        <p>Imperial Engineering Associates</p>
      </Link>
    </div>
  );
};

export default Logo;
