const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects__list">
        <div className="projects__container bd-grid">
          <div>
            <h3 className="projects__subtitle">NTU Food Hunter</h3>
            <p className="projects__text">
              Final Year Project (under Assoc. Prof. Hui Siu Cheung) <br />
              <i>Jun 2020 - May 2021</i>
            </p>
          </div>
          <dl>
            <li>
              Developed a website for food review and recommendation in NTU
              using Django, PostgreSQL, and React.js
            </li>
            <li>
              Built LSTM and BERT deep learning models with Yelp dataset that
              achieve promising performances of 66.76% and 70.52% respectively
              on the fine-grained sentiment analysis of food reviews using
              Tensorflow
            </li>
            <li>
              Researched and implemented a Part-of-Speech (POS) algorithm to
              systematically extract adjective-noun pairs from food reviews as
              review tags that serve as food review summary with an accuracy of
              nearly 95%
            </li>
            <li>
              Created a Solr-based search system using Learning To Rank and BERT
              embeddings to find semantically similar food reviews,
              outperforming classical text retrieval methods (such as BM25 and
              tf-idf) by between 29% and 46% (Reproduction project for public
              access:{" "}
              <a href="https://github.com/tkhang1999/Solr-SBERT-semantic-search">
                Solr-SBERT-semantic-search
              </a>
              )
            </li>
            <li>
              Accepted paper to International Student Conference on Artificial
              Intelligence (<a href="https://stcai.ai/">STCAI</a>) 2021
            </li>
          </dl>
        </div>

        <div className="projects__container bd-grid">
          <div>
            <h3 className="projects__subtitle">COVID19 Status Chatbot</h3>
            <p className="projects__text">
              Personal Project <br />
              <i>May 2020</i>
            </p>
          </div>
          <dl>
            <li>
              Created an interactive chatbot on multiple platforms to get
              real-time COVID-19 status globally or in any country using
              Node.js, Dialogflow (Google Cloud), and Heroku (Project link:{" "}
              <a href="https://github.com/tkhang1999/COVID19-status-webhook">
                COVID19-status-webhook
              </a>
              )
            </li>
            <li>
              Invited to be a guest speaker at a Google Developer Groups (GDG)
              webinar to share my learning and chatbot development experiences
              on Google Cloud Platform
            </li>
          </dl>
        </div>

        <div className="projects__container bd-grid">
          <div>
            <h3 className="projects__subtitle">
              Undergraduate Research Experience on CAmpus (URECA)
            </h3>
            <p className="projects__text">
              Projects under Assoc. Prof. Hui Siu Cheung <br />
              <i>Sep 2018 - Jun 2019</i>
            </p>
          </div>
          <dl>
            <li>
              Developed a full-stack Web-based Automatic Programming Assessment
              System (APAS) for Data Structures course using Django to support
              multiple coding languages (C, Python, and Java) and automate exam
              and report generations
            </li>
            <li>
              Initiated and led a team of 3 to create Web-based Automatic
              Relationship Recommendation System (NTUpartner) to connect people
              in NTU using Django with machine learning and NLP approaches for
              matching algorithms
            </li>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Projects;
