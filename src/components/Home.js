import { Slide } from "react-awesome-reveal";
import homeImg from "../images/home.png";

const Home = () => {
  return (
    <section className="home bd-container bd-grid" id="home" data-testid="home">
      <div>
        <div className="home__data">
          <Slide direction="down" cascade triggerOnce>
            <div className="home__intro">
              <Slide direction="down" cascade triggerOnce>
                <h1 className="home__title">
                  Hi, I'm <span className="home__title-color">Khang</span>
                </h1>
                <p className="home__content">A Computer Science Enthusiast</p>
              </Slide>
            </div>
            <a href="mailto:tkhang1999@gmail.com" className="home__button">
              Contact
            </a>
          </Slide>
        </div>
        <div className="home__social">
          <Slide direction="down" cascade triggerOnce>
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
          </Slide>
        </div>
      </div>

      <div className="home__img">
        <img src={homeImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
