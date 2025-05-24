import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import homeData from "../../../public/homeData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Footer from "../footer/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import sdisLogo from "../../assets/images/sdisLogo.png";
import goal1 from "../../assets/images/goal1.png";
import goal2 from "../../assets/images/goal2.png";
import goal3 from "../../assets/images/goal3.png";
import klk from "../../assets/images/klk.jpg";
import hs from "../../assets/images/hs.jpg";
import about from "../../assets/images/about.jpg";
import mount from "../../assets/images/mount.png";
import newsH1 from "../../assets/images/newsH1.png";
import newsH2 from "../../assets/images/newsH2.png";
import newsH3 from "../../assets/images/newsH3.png";
import starlogo from "../../assets/images/starlogo.jpg";
import adalogo from "../../assets/images/adalogo.webp";
import iddalogo from "../../assets/images/iddalogo.png";
import logoo from "../../assets/images/logoo.png";

const images = {
  goal1,
  goal2,
  goal3,
  hs,
  klk,
  about,
  mount,
  newsH1,
  newsH2,
  newsH3,
  starlogo,
  logoo,
  adalogo,
  iddalogo
};

const Home = () => {
  const navigate = useNavigate();
  const secondHomeRef = useRef(null);
  const fourthRef = useRef(null);

  // Second section slider autoplay state
  const [startAutoplay, setStartAutoplay] = useState(false);

  // IntersectionObserver - second section (slider autoplay)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAutoplay(true);
        } else {
          setStartAutoplay(false);
        }
      },
      { threshold: 0.3 }
    );

    if (secondHomeRef.current) {
      observer.observe(secondHomeRef.current);
    }

    return () => {
      if (secondHomeRef.current) {
        observer.unobserve(secondHomeRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: startAutoplay,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1500,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1160,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 668,
        settings: { slidesToShow: 1 }
      }
    ]
  };

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
      <section className="second-home" ref={secondHomeRef}>
        <div className="second-home-container">
          <h4>{homeData.goals.title}</h4>
          <div className="second-home-imgs">
            <Slider key={startAutoplay ? "play" : "pause"} {...settings}>
              {homeData.goals.images.map((img, index) => (
                <div key={index}>
                  <img src={images[img]} alt={`goal-${index}`} />
                </div>
              ))}
            </Slider>
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
                <img
                  key={index}
                  src={images[img]}
                  alt={`rec-${index}`}
                  style={{ animationDelay: `${index + 1}s` }}
                />
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
              <div
                onClick={() => navigate("/news")}
                className="materials"
                key={index}
              >
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
          {/* Fading effects */}
          <div className="fade-left"></div>
          <div className="fade-right"></div>

          <div className="partner-slide">
            {homeData.partners.logos
              .concat(homeData.partners.logos)
              .concat(homeData.partners.logos)
              .concat(homeData.partners.logos)
              .concat(homeData.partners.logos)
              .concat(homeData.partners.logos)
              .concat(homeData.partners.logos)
              .map((logo, index) => (
                <img key={index} src={images[logo]} alt={`partner-${index}`} />
              ))}
          </div>
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
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                placeholder="Enter your email"
                type="email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                placeholder="Enter your suggestions"
              ></textarea>
            </div>

            <NavLink className="btn send-btn-home">
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
