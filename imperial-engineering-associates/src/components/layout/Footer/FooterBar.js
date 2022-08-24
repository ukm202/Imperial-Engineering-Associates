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

const FooterBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="footer-bar">
      <h2>
        For Further Questions, Please{" "}
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
      </h2>
    </div>
  );
};

export default FooterBar;
