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
            <a href="tel:+9779845095940">
              {" "}
              <MdLocalPhone
                size={20}
                style={{ verticalAlign: "middle" }}
                fill="rgb(213, 27, 11)"
              />{" "}
              +977 984-509-5940
            </a>
          </div>
          <div>
            <a href="mailto: imprl.np@gmail.com">
              <MdOutlineMail
                size={20}
                style={{ verticalAlign: "middle" }}
                fill="rgb(213, 27, 11)"
              />{" "}
              imprl.np@gmail.com
            </a>
          </div>
        </div>

        <div className="icons">
          <a
            href="https://www.facebook.com/Imperial2021.Associates"
            target="_blank"
          >
            <FaFacebookF
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
              }}
              className="spin-animation"
            />
          </a>
          <a href="#" style={{ pointerEvents: "none" }}>
            <FaTwitter
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
              }}
              className="spin-animation"
            />
          </a>
          <a href="https://www.uttammishra.com/" target='_blank'>
            <FaInstagram
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
              }}
              className="spin-animation"
            />
          </a>
          <a href="https://www.linkedin.com/in/uttam-mishra/" target="_blank">
            <FaLinkedinIn
              size={35}
              style={{
                verticalAlign: "middle",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "5px",
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
