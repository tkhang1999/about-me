import aboutImg from "../images/about.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-container bd-grid">
        <div className="about__img">
          <img src={aboutImg} alt="about" />
        </div>
        <div>
          <h2 className="about__subtitle">People call me Khang</h2>
          <p className="about__text">
            My name is Khang Le and I am currently a Master's (Thesis) student
            at Simon Fraser University (SFU) with a research interest in
            software engineering and programming languages.
            <br />
            <br />
            Previously, I graduated from Nanyang Technological University (NTU)
            with a Bachelor's degree in Computer Science, followed by several
            professional working experiences as a software engineer. In my free
            time, I enjoy cooking, jogging, and playing table tennis and
            badminton.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
