import "./style.css";
import map from "../../assets/images/map.png";
import insta from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
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
            <img src={map} alt="map" width={320} height={270} />
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
