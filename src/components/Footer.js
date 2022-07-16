const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Khang Le</p>
      <div className="footer__social">
        <a href="mailto:tkhang1999@gmail.com" className="footer__icon">
          <i className="bx bxs-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tan-khang-le/"
          className="footer__icon"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/tkhang1999" className="footer__icon">
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <p>&#169; 2021 handcrafted by Khang Le</p>
    </footer>
  );
};

export default Footer;
