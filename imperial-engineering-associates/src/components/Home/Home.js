import "./Home.css";
import Img1 from "../../Images/Budhha Airlines Building 4.jpeg"
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { ImPointRight, ImPointLeft } from "react-icons/im";
const Home = () => {
    return ( 
        <>
         
            <div className="home">
                <img src={Img1} alt="Img1" />
                <div className="home-content">
                    <div className="message">
                        <FaQuoteLeft size={25} />
                        <h2>Let's Build Our Dream Together</h2>
                        <FaQuoteRight size={25} />
                    </div>
                    <button className="home-contact">
                        <a href="/contact">
                            <ImPointRight size={20} style={{verticalAlign:'bottom'}} />
                                Let's Talk
                            <ImPointLeft size={20} style={{verticalAlign:"middle"}} />
                        </a>

                    </button>

  
                    

                </div>

            </div>
            
        </>
    );
}
 
export default Home;