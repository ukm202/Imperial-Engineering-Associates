import "./Team.css";
import Uttam from "../../Images/Uttam.jpeg";
import Chandan from "../../Images/Chandan.jpeg";
import Priti from "../../Images/Priti.jpeg";
import Himal from "../../Images/Himal.jpeg";
import { ImPointRight } from "react-icons/im";

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
      <div className="team-list">
        {members.map((member, idx) => {
          return (
            <div className="member-item" key={idx}>
    
              <img src={member.url} alt={member.title} />
              <br />
              <h4>{member.name}</h4>
              <p>{member.position} </p>
              <p>{member.college} </p>
              <p id="major">{member.major} </p>
            </div>
          );
        })}
      </div>
      <br />

      <a href="/members">
        View More <ImPointRight size={15} style={{ verticalAlign: "middle" }} />
      </a>
    </div>
  );
};

export default Team;
