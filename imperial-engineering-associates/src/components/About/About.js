import "./About.css";
import { FaAward, FaHandPeace } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
const About = () => {
  return (
    <div className="about-main">
      <div className="about">
        <a href="/about"><h2>About Us</h2></a>
        <h5>We are committed for your sustainable construction.</h5>
        <p>
          Imperial Engineering Associates was established in 2018 registered
          under the Government of Nepal, Department of Engineering and Construction, with an objective to provide
          sustainable construction satisfying clients requirements in a
          strategic and innovative way of construction.
        </p>
        <br />
        <div className="main-grid">
            <div className="grid-item">
                <FaAward size={65} fill="var(--color-primary-variant)"  />
                <div className="grid-content">
                    <h4>4+ Years</h4>
                    <p>Of Experience</p>
                </div>


            </div>
        
            <div className="grid-item">
                <MdPlace size={65} fill="var(--color-primary-variant)" />
                <div className="grid-content">
                    <h4>3 Provinces</h4>
                    <p>Projects Running</p>
                </div>
            

            </div>
           
            <div className="grid-item" id="last">
                <FaHandPeace size={65} fill="var(--color-primary-variant)" />
                <div className="grid-content">
                    <h4>20+ Clients</h4>
                    <p>Happy Clients</p>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default About;
