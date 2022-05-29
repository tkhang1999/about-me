import aboutImg from "../images/about.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <h2 className="about__subtitle">People call me Khang</h2>
          <p className="about__text">
            I am a computer science enthusiast who love solving real-world
            problems. I graduated from Nanyang Technological University with a
            Bachelor of Engineering with Honours (Highest Distinction) in
            Computer Science.
            <br />
            <br />I have a great interest in doing research in the fields of AI,
            data science and software engineering as well as developing
            full-stack applications. To pursue my interests, I have taken two
            elective focuses during college, one in Data Science and Analytics
            and the other in High Performance Computing. In my free time, I
            enjoy cooking, jogging, and playing table tennis and badminton.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
