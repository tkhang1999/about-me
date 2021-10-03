const Work = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Work Experience</h2>
            <div className="work__list">
                <div className="work__container bd-grid">
                    <div>
                        <h3><a className="work__subtitle" href="https://www.goldmansachs.com/">Goldman Sachs</a></h3>
                        <p className="work__text">
                            Analyst (Software Engineer) <br/>
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

                <div className="work__container bd-grid">
                    <div>
                        <h3><a className="work__subtitle" href="https://noviscient.com/">Noviscient</a></h3>
                        <p className="work__text">
                            Junior Engineer (Apprenticeship under <a href="https://www.sginnovate.com/talentprogrammes">SGInnovate Summation Programme</a>) <br/>
                            <i>May 2019 - Aug 2019</i>
                        </p>
                    </div>
                    <dl>
                        <li>Built a web application that gives investors and alpha partners access to portfolio creation and monitoring tools</li>
                        <li>Used different technologies such as Django, Docker, PostgreSQL, and jQuery for web full-stack development</li>
                        <li>Liaised with CTO to deploy the demo website successfully for investors</li>
                    </dl>
                </div>

                <div className="work__container bd-grid">
                    <div>
                        <h3><a className="work__subtitle" href="https://www.ackcio.com/">Ackcio</a></h3>
                        <p className="work__text">
                            Intern Software Engineer <br/>
                            <i>May 2018 - Aug 2018</i>
                        </p>
                    </div>
                    <dl>
                        <li>Developed a software running on Raspberry Pi to read and transmit real-time data for construction monitoring</li>
                        <li>Utilized the multi-threading technique for concurrent execution in communicating serial data using Python</li>
                        <li>Worked with senior engineers to deploy the software successfully to construction sites in Singapore and Korea</li>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Work;