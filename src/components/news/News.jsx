import "./style.css";
import Footer from "../footer/Footer";
import mount from "../../assets/images/mount.png";
import news4 from "../../assets/images/news4.png";
import { useEffect } from "react";


const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="news">
        <div className="small-div-news">
          <h2>Breaking News</h2>
        </div>
        <div className="news-container">
          <div className="news-materials-first">
            <img src={mount} alt="" />
          </div>
          <hr />
          <div className="news-container-text">
            <h5>
              <b>What We Do:</b>
            </h5>
            <ul>
              <li>
                <b>Shine a Light on Overlooked Issues:</b> We uncover and
                amplify the often-unspoken problems that hinder sustainable
                growth and innovation
              </li>
              <li>
                <b>Promote Collaborative Solutions:</b> By bringing together
                thought leaders, changemakers, and innovators from diverse
                fields, we co-create strategies that drive lasting impact.
              </li>
              <li>
                <b>Inspire Action:</b> Through thought-provoking discussions,
                insights, and case studies, we empower individuals and
                organizations to take meaningful steps toward a sustainable
                future.
              </li>
            </ul>
            <p>
              “We envision a world where sustainable economic systems fuel
              progress, empower communities, and protect the planet. By blending
              innovation with equity, we aim to inspire a new standard of
              development that benefits everyone.”
            </p>
          </div>
          <hr />
          <div className="news-materials-second">
            <img src={news4} alt="" />
            <div className="news-materials-text">
              <h5>Materials: Baking soda, vinegar</h5>
              <h6>Volcano Eruption</h6>
              <p>
                Czech firefighters tackle large toxic train fire A train
                transporting benzene, a carcinogen, derailed and caught fire on
              </p>
              <div className="time-news">
                <p>2 hrs ago</p>
                <p>Europe</p>
              </div>
            </div>
          </div>
          <div className="news-materials-second">
            <img src={news4} alt="" />
            <div className="news-materials-text">
              <h5>Materials: Baking soda, vinegar</h5>
              <h6>Volcano Eruption</h6>
              <p>
                Czech firefighters tackle large toxic train fire A train
                transporting benzene, a carcinogen, derailed and caught fire on
              </p>
              <div className="time-news">
                <p>2 hrs ago</p>
                <p>Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <div className="footer-news">
        <Footer />
      </div>
    </>
  );
};
export default News;
