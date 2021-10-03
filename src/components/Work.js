const Work = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Work Experience</h2>
            <div className="work__list">
                <div className="work__container bd-grid">
                    <div>
                        <h3><a className="work__subtitle" href="https://www.goldmansachs.com/">Goldman Sachs</a></h3>
                        <p className="work__text">
                            Software Engineer <br/>
                            <i>Jul 2021 - Present</i>
                        </p>
                    </div>
                    <dl>
                        <li>Work in the Listed Clearing Department under Global Markets Division</li>
                        <li>Maintain various applications using Java that support the derivative clearing business of millions of trades</li>
                        <li>Develop multiple client-facing technologies and dashboards using React.js to fulfill business requirements</li>
                    </dl>
                </div>

                <div className="work__container bd-grid">
                    <div>
                        <h3><a className="work__subtitle" href="https://www.goldmansachs.com/">Goldman Sachs</a></h3>
                        <p className="work__text">
                            Summer Analyst <br/>
                            <i>Jul 2020 - Aug 2020</i>
                        </p>
                    </div>
                    <dl>
                        <li>Built a web dashboard for memory usage monitoring of multiple applications and processes running in the firm</li>
                        <li>Developed the multi-threaded backend service using Java Spring Boot and the frontend using React.js</li>
                        <li>Collaborated with senior engineers to deploy the dashboard successfully to the QA environment</li>
                    </dl>
                </div>

                <div className="work__container bd-grid">
                    <div>
                        <h3><a className="work__subtitle" href="https://www.paypal.com/">Paypal</a></h3>
                        <p className="work__text">
                            Software Engineering Intern <br/>
                            <i>Aug 2019 - Dec 2019</i>
                        </p>
                    </div>
                    <dl>
                        <li>Designed and worked on multiple RESTful web services in the Compliance platform using Java Spring Boot</li>
                        <li>Developed machine learning models that detect and reconcile regulatory breaches based on partial account data</li>
                        <li>Researched and proposed the open-source Conflict-free Replicated Data Type (CRDT) Counter designs that
                            support distributed systems and focus on eventual consistency</li>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Work;