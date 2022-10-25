const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project__list">
        <div className="project__container bd-container">
          <div>
            <h3>Machine Learning for Food Review and Recommendation</h3>
            <p>
              Final Year Project supervised by Assoc. Prof. Hui Siu Cheung{" "}
              <br />
              <i>Jun 2020 - May 2021</i>
            </p>
          </div>
          <dl className="project__text">
            <li>
              Developed a website (Food Hunter) for food review and
              recommendation using Django, PostgreSQL, and React
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
              at International Student Conference on Artificial Intelligence (
              <a className="external__link" href="https://stcai.ai/">
                STCAI
              </a>
              ) 2021
            </li>
          </dl>
        </div>

        <div className="project__container bd-container">
          <div>
            <h3>COVID19 Status Chatbot</h3>
            <p>
              Personal Project <br />
              <i>May 2020</i>
            </p>
          </div>
          <dl className="project__text">
            <li>
              Created an interactive{" "}
              <a
                className="external__link"
                href="https://github.com/tkhang1999/COVID19-status-webhook"
              >
                chatbot
              </a>{" "}
              on multiple platforms to get real-time COVID-19 status globally or
              in any country using Node.js, Dialogflow (Google Cloud), and
              Heroku
            </li>
            <li>
              Invited to be a guest speaker at a Google Developer Groups (GDG)
              webinar to share about my chatbot development and learning
              experiences on Google Cloud Platform
            </li>
          </dl>
        </div>

        <div className="project__container bd-container">
          <div>
            <h3>Undergraduate Research Experience on CAmpus (URECA)</h3>
            <p>
              Research Projects supervised by Assoc. Prof. Hui Siu Cheung <br />
              <i>Aug 2018 - Jun 2019</i>
            </p>
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
