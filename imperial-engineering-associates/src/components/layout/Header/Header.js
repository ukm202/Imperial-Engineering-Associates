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
    <header className="header" id="home">
      <Logo />
      <div className="content">
        <div className="header-contact">
          <div>
            <a href="tel:123-456-7890">
              {" "}
              <MdLocalPhone
                size={20}
                style={{ verticalAlign: "middle" }}
                fill="rgb(213, 27, 11)"
              />{" "}
              +977 123-456-7890
            </a>
          </div>
          <div>
            <a href="mailto: abc@example.com">
              <MdOutlineMail
                size={20}
                style={{ verticalAlign: "middle" }}
                fill="rgb(213, 27, 11)"
              />{" "}
              abc@example.com
            </a>
          </div>
        </div>

        <div className="icons">
          <a href="#">
            <FaFacebookF
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding:'5px'
              }}
              className="spin-animation"
            />
          </a>
          <a href="#">
            <FaTwitter
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding:'5px'
              }}
              className="spin-animation"
            />
          </a>
          <a href="#">
            <FaInstagram
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding:'5px'
              }}
              className="spin-animation"
            />
          </a>
          <a href="#">
            <FaLinkedinIn
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding:'5px'
              }}
              className="spin-animation"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
