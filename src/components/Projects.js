const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects__list">
        <div className="projects__container bd-grid">
          <div>
            <h3 className="projects__subtitle">NTU Food Hunter</h3>
            <p className="projects__text">
              Final Year Project supervised by Assoc. Prof. Hui Siu Cheung{" "}
              <br />
              <i>Jun 2020 - May 2021</i>
            </p>
          </div>
          <dl>
            <li>
              Developed a website for food review and recommendation in NTU
              using Django, PostgreSQL, and React.js
            </li>
            <li>
              Built LSTM and BERT deep learning models using Tensorflow and Yelp
              dataset, achieving promising performances of 66.76% and 70.52%
              respectively on the fine-grained sentiment analysis of food
              reviews
            </li>
            <li>
              Researched and implemented a Part-of-Speech (POS) algorithm for
              food review summarization by extracting adjective-noun pairs from
              food reviews as descriptive review tags with an accuracy of nearly
              95%
            </li>
            <li>
              Created a Solr-based information retrieval system using Learning
              To Rank and BERT for semantically similar food review search,
              outperforming classical text retrieval methods (BM25 and tf-idf)
              by between 29% and 46% (Reproduction project for public access:{" "}
              <a href="https://github.com/tkhang1999/Solr-SBERT-semantic-search">
                Solr-SBERT-semantic-search
              </a>
              )
            </li>
            <li>
              Accepted <a href="https://arxiv.org/abs/2201.10978">paper</a> to
              International Student Conference on Artificial Intelligence (
              <a href="https://stcai.ai/">STCAI</a>) 2021
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
              Undergraduate Research Experience on CAmpus (URECA) - President
              Research Scholar
            </h3>
            <p className="projects__text">
              Projects supervised by Assoc. Prof. Hui Siu Cheung <br />
              <i>Aug 2018 - Jun 2019</i>
            </p>
          </div>
          <dl>
            <li>
              Invited to join research-intensive URECA programme in NTU for
              students with excellent academic standing
            </li>
            <li>
              Developed web-based Automatic Programming Assessment System (APAS)
              to support various coding practices (C, Python, Java) and
              automatic code testing and grading for students in Data Structures
              course using Django
            </li>
            <li>
              Initiated and led a team of 3 to create web-based Automatic
              Relationship Recommendation System (NTUpartner) to connect people
              in NTU with machine learning and NLP approaches for matching
              algorithms using Python
            </li>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Projects;
