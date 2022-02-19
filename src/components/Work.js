const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work Experience</h2>
      <div className="work__list">
        <div className="work__container bd-grid">
          <div>
            <h3>
              <a
                className="external__link"
                href="https://www.goldmansachs.com/"
              >
                Goldman Sachs
              </a>
            </h3>
            <p>
              Analyst (Software Engineer) <br />
              <i>Jul 2021 - Present</i>
            </p>
          </div>
          <dl>
            <li>
              Work concurrently in two engineering teams of Listed Clearing
              Department under Global Markets Division
            </li>
            <li>
              Maintain various in-house clearing applications and microservices
              to support the derivatives clearing business of millions of trades
              from both clients and clearing houses using Java and Spring Boot
            </li>
            <li>
              Develop full-stack web dashboards for Prime Services in GS Marquee
              as part of a digital strategy to help hedge funds manage risk,
              monitor portfolios, maintain liquidity, and build businesses using
              Java, Dropwizard, and React.js
            </li>
          </dl>
        </div>

        <div className="work__container bd-grid">
          <div>
            <h3>
              <a
                className="external__link"
                href="https://www.goldmansachs.com/"
              >
                Goldman Sachs
              </a>
            </h3>
            <p>
              Summer Analyst <br />
              <i>Jul 2020 - Aug 2020</i>
            </p>
          </div>
          <dl>
            <li>
              Built a full-stack web dashboard for memory usage monitoring of
              multiple applications and concurrent processes running in the firm
              using Java Spring Boot and React.js
            </li>
            <li>
              Collaborated with senior engineers to deploy the dashboard
              successfully and present results to the global team
            </li>
          </dl>
        </div>

        <div className="work__container bd-grid">
          <div>
            <h3>
              <a className="external__link" href="https://www.paypal.com/">
                PayPal
              </a>
            </h3>
            <p>
              Software Engineering Intern <br />
              <i>Aug 2019 - Dec 2019</i>
            </p>
          </div>
          <dl>
            <li>
              Designed and worked on multiple RESTful web services in the
              Compliance platform using Java Spring Boot
            </li>
            <li>
              Developed machine learning models that detect and reconcile
              regulatory breaches based on partial account data
            </li>
            <li>
              Researched and proposed the open-source Conflict-free Replicated
              Data Type (CRDT) Counter designs in Java that support distributed
              systems and focus on eventual consistency
            </li>
          </dl>
        </div>

        <div className="work__container bd-grid">
          <div>
            <h3>
              <a className="external__link" href="https://noviscient.com/">
                Noviscient
              </a>
            </h3>
            <p>
              Junior Engineer (Apprenticeship under{" "}
              <a
                className="external__link"
                href="https://www.sginnovate.com/talentprogrammes"
              >
                SGInnovate Summation Programme
              </a>
              ) <br />
              <i>May 2019 - Aug 2019</i>
            </p>
          </div>
          <dl>
            <li>
              Built a full-stack web application that gives investors and alpha
              partners access to portfolio creation and monitoring tools using
              different technologies such as Django, Docker, PostgreSQL, and
              jQuery
            </li>
            <li>
              Liaised with CTO to successfully deploy and present the demo
              website to investors
            </li>
          </dl>
        </div>

        <div className="work__container bd-grid">
          <div>
            <h3>
              <a className="external__link" href="https://www.ackcio.com/">
                Ackcio
              </a>
            </h3>
            <p>
              Intern Software Engineer <br />
              <i>May 2018 - Aug 2018</i>
            </p>
          </div>
          <dl>
            <li>
              Developed a multi-threaded software running on Raspberry Pi to
              concurrently read and transmit real-time serial data for wireless
              construction monitoring using Python and SQLite
            </li>
            <li>
              Worked with senior engineers to deploy the software successfully
              to construction sites in Singapore and Korea
            </li>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Work;
