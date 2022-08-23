import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="searchBox">
                <input type="search" placeholder="How Can We Help You?" />
            </div>
       
            <div className="navs">
                <div>
                    <a href="#">Home</a>
                </div>
                <div className="dropdown">
                    <a href="#">Our Company<IoMdArrowDropdown size={20} style={{verticalAlign: 'middle'}} /> </a>
                    <div className="dropdown-content">
                        <a href="#">About Us</a>
                        <a href="#">Message from Chairman</a>
                        <a href="#">Our Team</a>
                        <a href="#">Our Clients</a>
                    </div>
                </div>
                <div>
                    <a href="#">Our Services</a>
                </div>
                <div>
                    <a href="#">Training</a>

                </div>
                <div>
                    <a href="#">Recruitment</a>


                </div>
                <div>
                    <a href="#">Contact Us</a>

                </div>
            </div>

        </nav>
        
        
    );
}
 
export default Navbar;