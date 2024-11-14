import "./Footer.css";

const Footer = () => {
  return (
    <div className="layout">
      <div className="footer">
        <p className="footer-p">
          App desarrollada por goDev - © 2024 - Todos los derechos reservados
        </p>
        <a href="http://">
          <img className="logo-footer" src="Logo.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
