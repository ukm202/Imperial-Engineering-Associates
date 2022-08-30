import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Recruitment.css";
// Second simple component with heading tag
function Recruitment() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.opener = null;
      // window.open("", "_self", "");
      window.close();
    }, 5000);
  }, []);

  return (
    <div id="recruitment" className="recruitment">
      <div className="rct-message">
        <h1>Not Hiring At The Moment!</h1>
        <h3>
          Email us your Resume. We will notify you if any position opens up that
          would fit your skill.
        </h3>
      </div>
    </div>
  );
}
export default Recruitment;
