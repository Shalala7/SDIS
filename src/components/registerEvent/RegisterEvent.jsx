import "./style.css";
import { useState } from "react";
import modal from "../../assets/images/modal.png";
import Footer from "../footer/Footer";

const RegisterEvent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);

    // 5 saniyədən sonra modalı bağla
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <section className="register">
        <div className="small-div-register"></div>
        <div className="register-container">
          <h1>Register for The Event</h1>
          <form className="form-register" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn submit-btn">Submit</button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-image-only">
            <img src={modal} alt="modal" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RegisterEvent;
