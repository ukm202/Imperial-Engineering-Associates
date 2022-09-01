import "./Team.css";
import Uttam from "../../Images/Uttam.jpeg";
import Chandan from "../../Images/Chandan.jpeg";
import Priti from "../../Images/Priti.jpeg";
import Himal from "../../Images/Himal.jpeg";
import { ImPointRight } from "react-icons/im";

// import swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Team = () => {
  const members = [
    {
      name: "Chandan Mishra",
      position: "Chairman & Co-founder",
      college: "New York University '19",
      major: "Civil Engineering",
      url: Chandan,
    },
    {
      name: "Himal Shrestha",
      position: "Director & Co-founder",
      college: "New York University '19",
      major: "Computer Science | Applied Mathematics",
      url: Himal,
    },
    {
      name: "Priti Jha",
      position: "Managing Director",
      college: "Kathmandu University '18",
      major: "MBA in Finance",
      url: Priti,
    },
    {
      name: "Uttam Kumar Mishra",
      position: "Software Engineer",
      college: "New York University '22",
      major: "Computer Science | Applied Mathematics",
      url: Uttam,
    },
  ];
  return (
    <div className="team" id="team">
      <br />
      <br />
      <h2>We are</h2>
      <hr />
      <br />
      <br />
      <Swiper className="team-list" 
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        // pagination={{ clickable: true }} 
        loop= {true}
        autoplay= {{
            delay: 3000,
            disableOnInteraction: true,
        }}
      >
        {members.map((member, idx) => {
          return (
            <SwiperSlide className="member-item" key={idx}>
              <center>
                <img src={member.url} alt={member.title} style={{width:"9rem", height:"9rem", borderRadius:"50%"}} />

              </center>
    
              <br />
              <h4>{member.name}</h4>
              <p>{member.position} </p>
              <p>{member.college} </p>
              <p id="major">{member.major} </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <br />

      <a href="/members">
        View More <ImPointRight size={15} style={{ verticalAlign: "middle" }} />
      </a>
    </div>
  );
};

export default Team;
