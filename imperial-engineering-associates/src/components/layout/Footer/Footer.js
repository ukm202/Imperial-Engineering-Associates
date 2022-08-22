import FooterBar from "./FooterBar";
import FooterBottom from "./FooterBottom";
import "./Footer.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterBar />
      <FooterBottom />

      <div className="sticky-top" >
        <a href="#">
          <BsFillArrowUpCircleFill fill="green" size={40} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
