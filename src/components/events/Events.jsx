import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import eventsData from "../../../public/eventsData.json";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import pic4 from "../../assets/images/pic4.png";
import pic5 from "../../assets/images/pic5.png";
import pic6 from "../../assets/images/pic6.png";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

const Events = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="events">
        <div className="small-div-events">
          <h1>Event</h1>
        </div>
        <div className="events-container">
          <div className="img-event" onClick={() => navigate("/eventDetails")}>
            <img src={pic1} alt="pic1" />
            <div className="text-event">
              <p>20 February 2025</p>
              <NavLink to="/registerEvent">Join Us</NavLink>
            </div>
          </div>
          <div className="img-event" onClick={() => navigate("/eventDetails")}>
            <img src={pic2} alt="pic2" />
            <div className="text-event">
              <p>20 February 2025</p>
              <NavLink to="/registerEvent">Join Us</NavLink>
            </div>
          </div>
          <div className="img-event" onClick={() => navigate("/eventDetails")}>
            <img src={pic3} alt="pic3" />
            <div className="text-event">
              <p>20 February 2025</p>
              <NavLink to="/registerEvent">Join Us</NavLink>
            </div>
          </div>
          <div className="img-event" onClick={() => navigate("/eventDetails")}>
            <img src={pic4} alt="pic4" />
            <div className="text-event">
              <p>20 February 2025</p>
              <NavLink to="/registerEvent">Join Us</NavLink>
            </div>
          </div>
          <div className="img-event" onClick={() => navigate("/eventDetails")}>
            <img src={pic5} alt="pic5" />
            <div className="text-event">
              <p>20 February 2025</p>
              <NavLink to="/registerEvent">Join Us</NavLink>
            </div>
          </div>
          <div className="img-event" onClick={() => navigate("/eventDetails")}>
            <img src={pic6} alt="pic6" />
            <div className="text-event">
              <p>20 February 2025</p>
              <NavLink to="/registerEvent">Join Us</NavLink>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-events">
        <Footer />
      </div>
    </>
  );
};
export default Events;
