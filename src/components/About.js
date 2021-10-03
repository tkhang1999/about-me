import aboutImg from "../images/about.jpg";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <h2 className="about__subtitle">People call me Khang</h2>
                    <p className="about__text">
                        I graduated from Nanyang Technological University with a Bachelor of Engineering in Computer Science (Highest Distinction). 
                        I am a computer science enthusiast and love solving real-world problems.
                        <br/><br/> 
                        I have a great interest in developing full-stack applications, algorithms as well as AI, machine learning, and data science.
                        To pursue my interests, I have taken two elective focuses during college,
                        one in High Performance Computing and the other in Data Science and Analytics.
                        In my free time, I enjoy playing table tennis and jogging.
                    </p>    
                </div>                                   
            </div>
        </section>
    );
}

export default About;