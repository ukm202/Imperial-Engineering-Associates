import "./Clients.css";
import Client1 from "../../Images/Client-buddha-airlines.jpeg";
import Client2 from "../../Images/Design 05.jpeg";
import Client3 from "../../Images/Client-arju.jpeg";
import Client4 from "../../Images/Client-kanyam.jpeg";

import { ImPointRight } from "react-icons/im";
const Clients = () => {
  const clients = [
    {
      url: Client1,
      title: "Buddha Airlines",
    },
    {
        url: Client2,
        title: "Hotel Kaushalya",
        
    },
    {
        url: Client3,
        
        title: "Arju Rice Mill",
    },
    {
        url: Client4,
        title: "Majestic Banquet Hall",
    }
    ];
  return (
    <div className="clients">
      <br />
      <br />
      <h2>Our Happy Clients</h2>
      <hr />
      <br />
      <br />
      <div className="clients-list">
        { clients.map((client,idx)=>{
            return(
                <div className="client-item" key={idx}>
                    <img src={client.url} alt={client.title} />
                    <br />
                    <h5>{client.title}</h5>
                </div>

            )
        }) }
       

      </div>
      <br />

      <a href="/">
        See More <ImPointRight size={15} style={{ verticalAlign: "middle" }} />
      </a>
    </div>
  );
};

export default Clients;
