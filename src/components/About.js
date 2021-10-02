import aboutImg from '../images/about.jpeg';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <h2 className="about__subtitle">I am Khang</h2>
                    <p className="about__text">I graduated from Nanyang Technological University with a Bachelor of Engineering (Computer Science)</p>           
                </div>                                   
            </div>
    </section>
    );
}

export default About;