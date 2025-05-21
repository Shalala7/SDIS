import "./style.css";
import { NavLink } from "react-router-dom";
import sdisLogo from "../../assets/images/sdisLogo.png";
import hr from "../../assets/images/hr.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";

const RegisterSite = () => {
  return (
    <>
      <section className="register-site">
        <div className="register-site-container">
          <NavLink to="/home">
            <img src={sdisLogo} alt="logo" />
          </NavLink>
          <h5>Sustainable Economic Development and Innovation Platform</h5>
          <div className="form-register-site">
            <h5>Register</h5>
            <p>Fill in your register details below.</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
              />
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>
                I agree to this website's privacy policy and terms of service
              </label>
            </div>

            <NavLink to="/verification" className="btn sign-btn-register-site">
              Sign up
            </NavLink>
            <img src={hr} alt="hr" />
            <div className="media-register-site">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
            <div className="text-register-site">
              <p>Already have an account?</p>
              <NavLink to="/login" className="register-site-btn">
                Log in
              </NavLink>
            </div>
          </div>
          <span>© 2025 SDSI. All Rights Reserved.</span>
        </div>
      </section>
    </>
  );
};
export default RegisterSite;
