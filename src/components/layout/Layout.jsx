import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import sdisLogo from "../../assets/images/sdisLogo.png";
import "./style.css";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top py-2">
        <div className="container-fluid align-items-center px-3">
          {/* Navbar Toggler - Solda */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Logo - Ortada */}
          <div className={`logo ${isNavOpen ? "hide-on-toggle" : ""}`}>
            <NavLink to="/" className="navbar-brand d-flex align-items-center">
              <img src={sdisLogo} alt="logo" className="logo-img me-2" />
              <h5 className="logo-text m-0">
                Sustainable Development <br /> Science and Innovation
              </h5>
            </NavLink>
          </div>

          {/* Sign In düyməsi - Sağda */}
          <button className={`btn nav-sign-btn ${isNavOpen ? "hide-on-toggle" : ""}`}>
            <Link to="/signIn" className="text-light">
              Sign in
            </Link>
          </button>
        </div>

        {/* Navbar Links */}
        <div className="layout-navbar">
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex align-items-center">
              {["Home", "About", "Events", "News", "Contact"].map(
                (item, index) => (
                  <li className="nav-item px-2" key={index}>
                    <NavLink
                      className="nav-link fw-semibold"
                      to={item.toLowerCase()}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
