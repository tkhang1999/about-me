const Work = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Experience</h2>

            <div className="work__container bd-grid">
                <div>
                    <h3><a className="work__subtitle" href="https://www.goldmansachs.com/">Goldman Sachs</a></h3>
                    <p className="work__text">
                        Software Engineer (Jul 2021 - Present)
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
                    <h3><a className="work__subtitle" href="https://www.paypal.com/">Paypal</a></h3>
                    <p className="work__text">
                        Software Engineer (Aug 2019 - Dec 2019)
                    </p>
                </div>
                <dl>
                    <li>Designed and worked on multiple RESTful web services in the Compliance platform using Java Spring Boot</li>
                    <li>Developed machine learning models that detect and reconcile regulatory breaches based on partial account data</li>
                    <li>Researched and proposed the open-source Conflict-free Replicated Data Type (CRDT) Counter designs that
                        support distributed systems and focus on eventual consistency</li>
                </dl>
            </div>
        </section>
    );
}

export default Work;