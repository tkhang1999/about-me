const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work Experience</h2>
      <div className="work__list">
        <div className="work__container bd-container">
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
              Software Engineer <br />
              <i>Jul 2021 - Aug 2023</i>
            </p>
          </div>
          <dl className="work__text">
            <li>
              Maintained various in-house applications covering external
              connectivity for the Listed Derivatives clearing business of
              millions of trades
            </li>
            <li>
              Built full-stack web dashboards for client reporting services on{" "}
              <a
                className="external__link"
                href="https://marquee.gs.com/welcome/products/prime-services"
              >
                GS Marquee
              </a>{" "}
              to help hedge funds manage risk, monitor portfolios, maintain
              liquidity, and build businesses
            </li>
            <li>
              Enhanced client order flow with horizontal scaling and distributed
              processing using Kafka to support more than 1,000 active clients
              across 50 markets globally
            </li>
          </dl>
        </div>

        <div className="work__container bd-container">
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
          <dl className="work__text">
            <li>
              Built a full-stack web dashboard for memory usage monitoring of
              multiple applications and concurrent processes running in the firm
              using Java, Spring Boot, Kafka, and React
            </li>
            <li>
              Worked with senior engineers to deploy the dashboard successfully
              and present results to the global team
            </li>
          </dl>
        </div>

        <div className="work__container bd-container">
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
          <dl className="work__text">
            <li>
              Designed and developed multiple RESTful web services in the
              Compliance platform to fulfill regulatory and Know Your Customer
              (KYC) requirements using Java and Spring Boot
            </li>
            <li>
              Built machine learning models, namely Random Forest and SVM, to
              detect regulatory breaches based on partial account data present
              during system failures
            </li>
            <li>
              Researched and developed the open-source Conflict-free Replicated
              Data Type (CRDT) designs in Java that support distributed systems
              and focus on strong eventual consistency
            </li>
          </dl>
        </div>

        <div className="work__container bd-container">
          <div>
            <h3>
              <a className="external__link" href="https://noviscient.com/">
                Noviscient
              </a>
            </h3>
            <p>
              Junior Engineer (Apprenticeship under{" "}
              <a className="external__link" href="https://www.sginnovate.com/">
                SGInnovate
              </a>
              ) <br />
              <i>May 2019 - Aug 2019</i>
            </p>
          </div>
          <dl className="work__text">
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

        <div className="work__container bd-container">
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
          <dl className="work__text">
            <li>
              Developed a multi-threaded software running on Raspberry Pi to
              concurrently read and transmit real-time serial data for wireless
              construction monitoring using Python and SQLite
            </li>
            <li>
              Collaborated with senior engineers to deploy the software
              successfully to construction sites in Singapore and Korea
            </li>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Work;
