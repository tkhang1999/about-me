import homeImg from "../images/home.png";

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div>
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'm <span className="home__title-color">Khang</span>.<br />A
            Computer Science Enthusiast
          </h1>
          <a href="mailto:tkhang1999@gmail.com" className="home__button">
            Contact
          </a>
        </div>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/tan-khang-le/"
            className="home__social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/tkhang1999" className="home__social-icon">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <div className="home__img">
        <img src={homeImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
