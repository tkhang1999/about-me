const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-container bd-grid">
        <h2 className="skills__subtitle">Profesional Skills</h2>
        <p className="skills__text">
          The technology stack that I'm currently working on includes, but not
          limited to, Java, React, Node.js, and Kubernetes.
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
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">Golang</span>
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
              <span className="skills__name">Data Science</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code skills__icon"></i>
              <span className="skills__name">Web Full-stack Development</span>
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
