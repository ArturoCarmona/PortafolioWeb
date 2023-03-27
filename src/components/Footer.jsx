import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
import { useTheme } from "./Themes";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className={`footer ${theme}`}>
      <Container>
        <Row>
          <Col sm={3}>
            <a href="#banner" className={`links-${theme}`}>
              Inicio
            </a>
          </Col>
          <Col sm={3}>
            <a href="#skills" className={`links-${theme}`}>
              Habilidades
            </a>
          </Col>
          <Col sm={3}>
            <a href="#projects" className={`links-${theme}`}>
              Proyectos
            </a>
          </Col>
          <Col sm={3}>
            <a href="#contact" className={`links-${theme}`}>
              Contactame
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <a
                href="https://m.me/gabriel.arturo.52"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaFacebook className={`social-${theme}`} />
              </a>
              <a
                href="https://www.instagram.com/gaboturo/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaInstagram className={`social-${theme}`} />
              </a>
              <a
                href="https://www.linkedin.com/in/garturogc/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin className={`social-${theme}`} />
              </a>
            </div>
            <div>
              <p>&copy; All rights reserviced</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
