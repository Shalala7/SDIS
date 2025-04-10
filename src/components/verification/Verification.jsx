import "./style.css";
import sdisLogo from "../../assets/images/sdisLogo.png";
import verification from "../../assets/images/verification.png";
import { NavLink } from "react-router-dom";

const Verification = () => {
  return (
    <>
      <section className="verification">
        <div className="verification-container">
          <NavLink to="/home">
            <img className="logo-verification" src={sdisLogo} alt="logo" />
          </NavLink>
          <h4>Sustinable Development Science and Innovation</h4>
          <img
            className="verification-img"
            src={verification}
            alt="verification"
          />
          
        </div>
        <p className="alt-note">© 2025 SDSI. All Rights Reserved.</p>
      </section>
    </>
  );
};
export default Verification;
