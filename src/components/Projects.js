const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects__list">
                <div className="projects__container bd-grid">
                    <div>
                        <h3 className="projects__subtitle">NTU Food Hunter</h3>
                        <p className="projects__text">
                            Final Year Project (under Assoc. Prof. Hui Siu Cheung) <br/>
                            <i>Jun 2020 - Jun 2021</i>
                        </p>
                    </div>
                    <dl>
                        <li>Develop a web application for food review and recommendation in NTU using Django, PostgreSQL, and React.js</li>
                        <li>Build LSTM and BERT deep learning models that achieve promising performance on the sentiment analysis
                            task of Yelp Review dataset using Tensorflow</li>
                        <li>Implement a Part-of-Speech (POS) algorithm to extract adjective-noun pairs from food reviews as review tags</li>
                        <li>Create a Solr search system using Learning To Rank and BERT embeddings to find semantically similar reviews 
                            (Reproduction project for public access: <a href="https://github.com/tkhang1999/Solr-SBERT-semantic-search">Solr-SBERT-semantic-search</a>)</li>
                        <li>Accepted paper to <a href="https://stcai.ai/">STCAI</a> 2021</li>
                    </dl>
                </div>

                <div className="projects__container bd-grid">
                    <div>
                        <h3 className="projects__subtitle">COVID19 Status Chatbot</h3>
                        <p className="projects__text">
                            Personal Project <br/>
                            <i>May 2020</i>
                        </p>
                    </div>
                    <dl>
                        <li>Created an interactive chatbot on multiple platforms to get real-time COVID-19 status globally or in any country</li>
                        <li>Used technologies including Node.js, Dialogflow, and Heroku 
                            (Project link: <a href="https://github.com/tkhang1999/COVID19-status-webhook">COVID19-status-webhook)</a></li>
                    </dl>
                </div>

                <div className="projects__container bd-grid">
                    <div>
                        <h3 className="projects__subtitle">Bai Lingual</h3>
                        <p className="projects__text">
                            Coursework Project <br/>
                            <i>Feb 2020 - Apr 2020</i>
                        </p>
                    </div>
                    <dl>
                        <li>Built an Android application with the latest image-to-text and text-to-speech technologies to help people learn
                            English by translating any captured object in an image to English and converting text into speech</li>
                        <li>Used technologies including Java, XML, Google Cloud APIs, and Firebase</li>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Projects;