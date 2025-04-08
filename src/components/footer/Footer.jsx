import "./style.css";
import footerData from "../../../public/footerData.json";
import sdisLogo from "../../assets/images/sdisLogo.png";
import insta from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <hr />
      <div className="footer-container">
        <div className="logo-footer">
          <img src={sdisLogo} alt="sdislogo" />
          <h5>{footerData.logoText}</h5>
          <div className="media-footer">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="insta" />
          </div>
        </div>
        <div className="menu-footer">
          <ul>
            <h5>Quick Links</h5>
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <h5>Membership</h5>
            {footerData.membershipLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>{footerData.copyright}</p>
      <hr />
    </section>
  );
};

export default Footer;
