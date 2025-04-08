import "./style.css";
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
                Product Management Masterclass,you will learn with Sarah
                Johnson- Head of Product Customer Platform
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
                <textarea className="form-control" rows={3} placeholder="Enter your message here"></textarea>
              </div>
              <button className="btn submit-btn-contact">Submit</button>
            </form>
         
          <div className="follow-contact">
            <h4>Follow Us</h4>
            <p>
              Product Management Masterclass,you will learn with Sarah Johnson-
              Head of Product Customer Platform
            </p>
            <iframe 
              width="305" 
              height="302" 
              style={{ border: "0", borderRadius: "8px" }}
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=40.3655,49.9384&q=Baku,Azerbaijan">
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;
