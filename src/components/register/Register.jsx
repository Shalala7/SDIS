import "./style.css";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

const Register = () => {
  return (
    <>
      <section className="register">
        <div className="small-div-register"></div>
        <div className="register-container">
          <h1>Register for The Event</h1>
          <div className="form-register">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <NavLink className="btn submit-btn">Submit</NavLink>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Register;
