import "./Header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocalPhone, MdOutlineMail } from "react-icons/md";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="content">
        <div className="header-contact">
          <div>
            <a href="tel:123-456-7890">
              {" "}
              <MdLocalPhone fill="rgb(213, 27, 11)" /> +977 123-456-7890
            </a>
          </div>
          <div>
            <a href="mailto: abc@example.com">
              <MdOutlineMail fill="rgb(213, 27, 11)" /> abc@example.com
            </a>
          </div>
        </div>

        <div className="icons">
          <a href="#">
            <FaFacebookF className="spin-animation" />
          </a>
          <a href="#">
            <FaTwitter className="spin-animation" />
          </a>
          <a href="#">
            <FaInstagram className="spin-animation" />
          </a>
          <a href="#">
            <FaLinkedinIn className="spin-animation" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
