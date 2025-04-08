import React from "react";
import { NavLink } from "react-router-dom";
import homeData from "../../../public/homeData.json";
import "./style.css";
import Footer from "../footer/Footer";

// Şəkilləri import edirik
import sdisLogo from "../../assets/images/sdisLogo.png";
import goal1 from "../../assets/images/goal1.png";
import goal2 from "../../assets/images/goal2.png";
import goal3 from "../../assets/images/goal3.png";
import rec1 from "../../assets/images/rec1.png";
import rec2 from "../../assets/images/rec2.png";
import rec3 from "../../assets/images/rec3.png";
import mount from "../../assets/images/mount.png";
import newsH1 from "../../assets/images/newsH1.png";
import newsH2 from "../../assets/images/newsH2.png";
import newsH3 from "../../assets/images/newsH3.png";
import empty from "../../assets/images/empty.png";

// JSON-dakı şəkil adlarını obyekt kimi saxlayırıq
const images = {
  goal1,
  goal2,
  goal3,
  rec1,
  rec2,
  rec3,
  mount,
  newsH1,
  newsH2,
  newsH3,
  empty
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="first-home">
        <div className="first-home-container">
          <div className="first-text-home">
            <h1>{homeData.hero.title}</h1>
            <p>{homeData.hero.description}</p>
            <NavLink
              className="btn home-events-btn"
              to={homeData.hero.buttonLink}
            >
              {homeData.hero.buttonText}
            </NavLink>
          </div>
          <div className="first-img-home">
            <img src={sdisLogo} alt="logo" />
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="second-home">
        <div className="second-home-container">
          <h4>{homeData.goals.title}</h4>
          <div className="second-home-imgs">
            {homeData.goals.images.map((img, index) => (
              <img key={index} src={images[img]} alt={`goal-${index}`} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="third-home">
        <div className="third-home-container">
          <div className="third-home-text">
            <h1>{homeData.about.title}</h1>
            <p>{homeData.about.description}</p>
          </div>
          <div className="third-home-images">
            <div className="third-home-img">
              <img src={images[homeData.about.images.large]} alt="rec" />
            </div>
            <div className="third-home-imgs">
              {homeData.about.images.small.map((img, index) => (
                <img key={index} src={images[img]} alt={`rec-${index}`} />
              ))}
            </div>
          </div>
          <NavLink className="btn home-see-btn" to={homeData.about.buttonLink}>
            {homeData.about.buttonText}
          </NavLink>
        </div>
      </section>

      {/* News Section */}
      <section className="fourth-home">
        <div className="fourth-home-container">
          <div className="fourth-heading-home">
            <h2>{homeData.news.title}</h2>
            <NavLink
              to={homeData.news.buttonLink}
              className="btn news-btn-home"
            >
              {homeData.news.buttonText}
            </NavLink>
          </div>

          <div className="fourth-left-home">
            <img src={images[homeData.news.featured.image]} alt="news" />
            <h5>{homeData.news.featured.title}</h5>
            <h6>{homeData.news.featured.subtitle}</h6>
            <p>{homeData.news.featured.description}</p>
            <NavLink
              to={homeData.news.featured.buttonLink}
              className="btn read-more-news-home"
            >
              {homeData.news.featured.buttonText}
            </NavLink>
          </div>

          <div className="fourth-right-home">
            {homeData.news.articles.map((article, index) => (
              <div className="materials" key={index}>
                <img src={images[article.image]} alt={`news-${index}`} />
                <div className="materials-text">
                  <h5>{article.title}</h5>
                  <h6>{article.subtitle}</h6>
                  <p>{article.description}</p>
                  <div className="time-country">
                    <p>{article.time}</p>
                    <p>{article.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="fifth-home">
        <h2>{homeData.partners.title}</h2>
        <div className="fifth-home-container">
          {homeData.partners.logos.map((logo, index) => (
            <img key={index} src={images[logo]} alt={`partner-${index}`} />
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-home">
        <div className="subscribe-home-container">
          <div className="subscribe-text-home">
            <h4>{homeData.subscribe.title}</h4>
            <p>{homeData.subscribe.subtitle}</p>
          </div>
          <form className="form-home">
            {homeData.subscribe.formFields.map((field, index) => (
              <div className="form-group" key={index}>
                <label>{field.label}</label>
                <input
                  className="form-control"
                  placeholder={field.placeholder}
                  type={field.type}
                />
              </div>
            ))}
            <NavLink className="btn subscribe-btn-home">
              {homeData.subscribe.buttonText}
            </NavLink>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
