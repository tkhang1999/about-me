const Skills = () => {
  return (
    <section className="skills section" id="skills" data-testid="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-container bd-grid">
        <h2 className="skills__subtitle">Profesional Skills</h2>
        <p className="skills__text">
          The technology stack that I'm currently working on includes, but not
          limited to, Java, Python, TypeScript, React, and Docker.
        </p>
        <div className="skills__list">
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">Python</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">Java</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">JavaScript/TypeScript</span>
            </div>
          </div>
        </div>
        <div className="skills__list">
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">
                Machine Learning/Deep Learning
              </span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">Full-stack Development</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
