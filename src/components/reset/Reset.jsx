import "./style.css";
import { NavLink } from "react-router-dom";
import sdisLogo from "../../assets/images/sdisLogo.png";

const Reset = () => {
  return (
    <>
      <section className="reset">
        <div className="reset-container">
          <NavLink to="/home">
            <img src={sdisLogo} alt="logo" />
          </NavLink>
          <h5>Sustinable Development Science and Innovation</h5>
          <div className="form-reset">
            <h4>Reset Password</h4>
            <p>Enter your email and we will send you a password reset link.</p>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your email"
              />
            </div>
            <NavLink className="btn reset-password-btn">
              Send reset email
            </NavLink>
            <br />
            <NavLink className="return-to-login" to="/login">
              Return to Login
            </NavLink>
          </div>
          <span>© 2025 SDSI. All Rights Reserved.</span>
        </div>
      </section>
    </>
  );
};
export default Reset;
