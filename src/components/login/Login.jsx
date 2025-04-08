import "./style.css";
import sdisLogo from "../../assets/images/sdisLogo.png";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login-container">
          <img src={sdisLogo} alt="logo" />
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
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
