import sfuImg from "../images/sfu.png";
import gsImg from "../images/goldman-sachs.png";
import paypalImg from "../images/paypal.png";
import noviscientImg from "../images/noviscient.png";
import ackcioImg from "../images/ackcio.png";

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work Experience</h2>
      <div className="work__list bd-container">
        <div className="work__container work__grid">
          <img className="work__img" src={sfuImg} alt="sfu-logo" />
          <p className="work__text">
            Graduate Research Assistant @{" "}
            <a className="external__link" href="https://www.sfu.ca/">
              SFU
            </a>{" "}
            <br />
            <i>Sep 2023 - Present</i>
          </p>
        </div>
        <div className="work__container work__grid">
          <img className="work__img" src={gsImg} alt="goldman-sachs-logo" />
          <p className="work__text">
            Software Engineer @{" "}
            <a className="external__link" href="https://www.goldmansachs.com/">
              Goldman Sachs
            </a>{" "}
            <br />
            <i>Jul 2021 - Aug 2023</i>
          </p>
        </div>

        <div className="work__container work__grid">
          <img className="work__img" src={gsImg} alt="Goldman Sachs" />
          <p className="work__text">
            Summer Analyst @{" "}
            <a className="external__link" href="https://www.goldmansachs.com/">
              Goldman Sachs
            </a>{" "}
            <br />
            <i>Jul 2020 - Aug 2020</i>
          </p>
        </div>

        <div className="work__container work__grid">
          <img className="work__img" src={paypalImg} alt="paypal-logo" />
          <p className="work__text">
            Software Engineering Inter @{" "}
            <a className="external__link" href="https://www.paypal.com/">
              PayPal
            </a>{" "}
            <br />
            <i>Aug 2019 - Dec 2019</i>
          </p>
        </div>

        <div className="work__container work__grid">
          <img
            className="work__img"
            src={noviscientImg}
            alt="noviscient-logo"
          />
          <p className="work__text">
            Junior Engineer @{" "}
            <a className="external__link" href="https://noviscient.com/">
              Noviscient
            </a>{" "}
            <br />
            <i>May 2019 - Aug 2019</i>
          </p>
        </div>

        <div className="work__container work__grid">
          <img className="work__img" src={ackcioImg} alt="ackcio-logo" />
          <p className="work__text">
            Intern Software Engineer @{" "}
            <a className="external__link" href="https://www.ackcio.com/">
              Ackcio
            </a>{" "}
            <br />
            <i>May 2018 - Aug 2018</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
