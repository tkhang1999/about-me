import Slide from "react-reveal/Slide";

import homeImg from "../images/home.png";

const Home = () => {
  return (
    <section className="home bd-container bd-grid" id="home">
      <div>
        <div className="home__data">
          <div className="home__intro">
            <Slide top>
              <h1 className="home__title">
                Hi, I'm <span className="home__title-color">Khang</span>
              </h1>
              <p className="home__content">A Computer Science Enthusiast</p>
            </Slide>
          </div>
          <Slide top>
            <a href="mailto:tkhang1999@gmail.com" className="home__button">
              Contact
            </a>
          </Slide>
        </div>
        <Slide top cascade>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/tan-khang-le/"
              className="home__social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/tkhang1999"
              className="home__social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </Slide>
      </div>

      <div className="home__img">
        <img src={homeImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
