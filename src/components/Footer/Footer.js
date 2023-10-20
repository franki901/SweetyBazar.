import "./Footer.css";

const Footer = () => {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Sweety Bazar | All Rights Reserved.</p>
        </div>
        <div className="home-sci">
          <a href="https://www.facebook.com" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://mail.google.com/" target="_blank">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
