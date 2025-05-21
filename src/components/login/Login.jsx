import "./style.css";
import { NavLink } from "react-router-dom";
import sdisLogo from "../../assets/images/sdisLogo.png";
import hr from "../../assets/images/hr.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login-container">
          <NavLink to="/home">
            <img src={sdisLogo} alt="logo" />
          </NavLink>
          <h5>Sustainable Economic Development and Innovation Platform</h5>
          <div className="form-login">
            <h5>Log in</h5>
            <p>Fill in your log in details below.</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
              />
            </div>
            <NavLink className="btn sign-btn-login">Sign In</NavLink>
            <img src={hr} alt="hr" />
            <div className="media-login">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
            <div className="text-login">
              <p>Don't have an account?</p>
              <NavLink to="/registerSite" className="register-login-btn">
                Register
              </NavLink>
              <NavLink to="/reset" className="password-btn">
                Forgot your password?
              </NavLink>
            </div>
          </div>
          <span>© 2025 SDSI. All Rights Reserved.</span>
        </div>
      </section>
    </>
  );
};
export default Login;
