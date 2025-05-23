import "./style.css";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

import klk from "../../assets/images/klk.jpg";
import hs from "../../assets/images/hs.jpg";
import about from "../../assets/images/about.jpg";

const images = { hs, klk, about };

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("/AboutData.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <>
      <section className="about-first">
        <div className="small-div-about-first">
          <h1>{aboutData.title}</h1>
        </div>
        <div className="about-first-container">
          <div className="text">
            <h2>{aboutData.sections[0].heading}</h2>
            <p>{aboutData.sections[0].text}</p>
          </div>
          <div className="images-about-first">
            <div className="img-about">
              <img src={images[aboutData.sections[0].images[0]]} alt="rec3" />
            </div>
            <div className="imgs-about">
              <img
                src={images[aboutData.sections[0].images[1]]}
                alt="starlogo"
              />
              <img src={images[aboutData.sections[0].images[2]]} alt="rec2" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-second">
        <div className="small-div-about-second"></div>
        <div className="about-second-container">
          <div className="about-second-container-text">
            <p>{aboutData.sections[1].text}</p>
            <hr />
            <h5>
              <b>What we do:</b>
            </h5>
            <ul>
              {aboutData.sections[1].highlights.map((item, index) => (
                <li key={index} style={{ "--i": index }}>
                  <b>{item.title}:</b> {item.description}
                </li>
              ))}
            </ul>
            <br />
            <h5>
              <b>Why we Exist:</b>
            </h5>
            <p>{aboutData.sections[1].whyExist}</p>
          </div>
        </div>
      </section>
      <div className="footer-about">
        <Footer />
      </div>
    </>
  );
};

export default About;
