const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects__list">
        <div className="projects__container bd-grid">
          <div>
            <h3>Machine Learning for Food Review and Recommendation</h3>
            <p>
              Final Year Project supervised by Assoc. Prof. Hui Siu Cheung{" "}
              <br />
              <i>Jun 2020 - May 2021</i>
            </p>
          </div>
          <dl>
            <li>
              Developed a website (Food Hunter) for food review and
              recommendation using Django, PostgreSQL, and React
            </li>
            <li>
              Built LSTM and BERT deep learning models using TensorFlow/Keras
              and Yelp dataset, achieving promising performances of 66.76% and
              70.52% respectively on the fine-grained sentiment analysis of food
              reviews
            </li>
            <li>
              Researched and implemented a Part-of-Speech (POS) algorithm for
              review tag generation by extracting adjective-noun pairs from food
              reviews with an accuracy of nearly 95%
            </li>
            <li>
              Created a Solr-based information retrieval system for semantic
              food search by utilizing BERT embeddings to retrieve semantically
              similar food reviews and products (Reproduction project for public
              access:{" "}
              <a
                className="external__link"
                href="https://github.com/tkhang1999/Solr-SBERT-semantic-search"
              >
                Solr-SBERT-semantic-search
              </a>
              )
            </li>
            <li>
              Trained a RankNet model, a Learning To Rank neural network model,
              for the re-ranking of food search results, outperforming classical
              text retrieval methods (BM25 and tf-idf) by between 29% and 46%
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

        <div className="projects__container bd-grid">
          <div>
            <h3>COVID19 Status Chatbot</h3>
            <p>
              Personal Project <br />
              <i>May 2020</i>
            </p>
          </div>
          <dl>
            <li>
              Created an interactive chatbot on multiple platforms to get
              real-time COVID-19 status globally or in any country using
              Node.js, Dialogflow (Google Cloud), and Heroku (Project link:{" "}
              <a
                className="external__link"
                href="https://github.com/tkhang1999/COVID19-status-webhook"
              >
                COVID19-status-webhook
              </a>
              )
            </li>
            <li>
              Invited to be a guest speaker at a Google Developer Groups (GDG)
              webinar to share about my chatbot development and learning
              experiences on Google Cloud Platform
            </li>
          </dl>
        </div>

        <div className="projects__container bd-grid">
          <div>
            <h3>
              Undergraduate Research Experience on CAmpus (URECA) - President
              Research Scholar
            </h3>
            <p>
              Research Projects supervised by Assoc. Prof. Hui Siu Cheung <br />
              <i>Aug 2018 - Jun 2019</i>
            </p>
          </div>
          <dl>
            <li>
              Developed web-based Automatic Programming Assessment System (APAS)
              to provide various coding practices (C, Python, and Java) and
              automatic code testing and grading for students in Data Structures
              course using Django
            </li>
            <li>
              Initiated and led a team of 3 to create mobile-web Automatic
              Relationship Recommendation System (NTUpartner) to connect people
              and recommend new friends in NTU
            </li>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Projects;
