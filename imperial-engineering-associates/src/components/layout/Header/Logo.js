import LogoImage from "../../../Images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="#">
        <img src={LogoImage} alt="Logo" />
        <p>Imperial Engineering Associates</p>
      </a>
    </div>
  );
};

export default Logo;
