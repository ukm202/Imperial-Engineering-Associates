import "./Services.css";
import { ImPointRight, ImPointLeft } from "react-icons/im";
import Services1 from "../../Images/services.jpeg";
import Industrial from "../../Images/Design 05.jpeg";
import Webdev from "../../Images/webdev.jpeg";
import { BsFillEyeFill } from "react-icons/bs";

import Building1 from "../../Images/Design 06.jpeg";
const Services = () => {
  const services = [
    {
      url: Building1,
      title: "Residential Buildings",
      to: "/building",
    },
    {
      url: Industrial,
      title: "Industrial Construction",
      to: "/indutrial",
    },
    // {
    //     'url':Building1,
    //     'title': "Courses & Trainings",
    //     'to':"/training",
    // },
    {
      url: Webdev,
      title: "Web Development",
      to: "/webdev",
    },
  ];
  return (
    <div className="services-main">
      <img src={Services1} alt="Services" />
      <div className="services">
        <a href="/services">
          <h2>Services</h2>
        </a>
        <hr />
        <br />
        <div className="services-grid">
          {services.map((service, idx) => {
            return (
              <div key={idx} className="services-item">
                <img src={service.url} alt={service.title} />
                <br />
                <h5>{service.title}</h5>
                <a href={service.to}>
                  See More <ImPointRight />
                </a>
              </div>
            );
          })}
        </div>
        <br />
        <div className="main-mission">
          <div className="mission">
            <BsFillEyeFill
              size={65}
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                backgroundColor: "var(--color-darkSlate)",
              }}
            />
            <h3>Our Vision</h3>
            <hr />
            <p>
              To be a leading engineering company satisfying all possible
              clients in and out of Nepal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
