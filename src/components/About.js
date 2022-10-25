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
            My name is Khang Le and I am currently working as a software
            engineer with great focus in developing full-stack applications and
            exploring new technologies. I graduated from Nanyang Technological
            University with a Bachelor of Engineering in Computer Science with
            Honours (Highest Distinction).
            <br />
            <br />I have a great interest in doing research in the fields of
            machine learning and software enginerring. To pursue my interests, I
            have taken two elective focuses during college, one in Data Science
            and Analytics and the other in High Performance Computing. In my
            free time, I enjoy cooking, jogging, and playing table tennis and
            badminton.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
