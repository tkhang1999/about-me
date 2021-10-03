import profileImg from "../images/profile-pic.png";

const Home = () => {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Khang</span><br />Solid Software Engineer</h1>

                <a href="mailto:tkhang1999@gmail.com" className="button">Contact</a>
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/tan-khang-le/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/tkhang1999" className="home__social-icon"><i className='bx bxl-github' ></i></a>
            </div>

            <div className="home__img">
                <img src={profileImg} alt="" />
            </div>
        </section>
    );
}

export default Home;