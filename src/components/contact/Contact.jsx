import "./style.css";
import map from "../../assets/images/map.png";
import insta from "../../assets/images/insta.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="small-div"></div>
        <div className="contact-container">
          <h1>Contact Us</h1>
          <form className="form-cont">
            <h4>Send message</h4>
            <p>
              Product Management Masterclass,you will learn with Sarah Johnson-
              Head of Product Customer Platform
            </p>
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Surname*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your surname"
              />
            </div>
            <div className="form-group w-100">
              <label>Email*</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group w-100">
              <label>Your Message*</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter your message here"
              ></textarea>
            </div>
            <button className="btn submit-btn-contact">Submit</button>
          </form>

          <div className="follow-contact">
            <h4>Follow Us</h4>
            <p>
              Product Management Masterclass,you will learn with Sarah Johnson-
              Head of Product Customer Platform
            </p>
            <div className="media-contact">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
              <img src={insta} alt="insta" />
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12161.195528796134!2d49.9427837!3d40.3578967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1744969776856!5m2!1sen!2saz"
                // width="600"
                // height="450"
                style={{ border: "0px", width: "100%", height: "300px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <img className="map-img" src={map} alt="map" /> */}
          </div>
        </div>
      </section>
      <div className="footer-contact">
        <Footer />
      </div>
    </>
  );
};
export default Contact;
