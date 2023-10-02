const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project__list">
        <div className="project__container bd-container">
          <div>
            <h3>Machine Learning for Food Review and Recommendation</h3>
            <i>Jun 2020 - May 2021</i>
          </div>
          <dl className="project__text">
            <li>
              Developed a full-stack website for food review and recommendation
              using Django, PostgreSQL, and React
            </li>
            <li>
              Implemented different deep learning approaches to address the
              problems of food review sentiment analysis, automatic review tag
              generation, and{" "}
              <a
                className="external__link"
                href="https://github.com/tkhang1999/Solr-SBERT-semantic-search"
              >
                semantic food search
              </a>
            </li>
            <li>
              Presented{" "}
              <a
                className="external__link"
                href="https://arxiv.org/abs/2201.10978"
              >
                research paper
              </a>{" "}
              at International Student Conference on Artificial Intelligence
              (STCAI) 2021
            </li>
          </dl>
        </div>

        <div className="project__container bd-container">
          <div>
            <h3>Undergraduate Research Experience on CAmpus (URECA) - NTU</h3>
            <i>Aug 2018 - Jun 2019</i>
          </div>
          <dl className="project__text">
            <li>
              Developed a web-based automatic programming assessment system
              (APAS) using Django that can support automatic code testing,
              grading, and plagiarism checking for multiple programming
              languages (C, Python, Java)
            </li>
            <li>
              Initiated and led a team of 3 to create a mobile-web automatic
              relationship recommendation system (NTUpartner) to connect people
              and recommend new friends in NTU
            </li>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Projects;
