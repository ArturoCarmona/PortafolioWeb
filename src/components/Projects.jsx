import React, { useState } from "react";
import "../styles/Projects.css";
import { useTheme } from "./Themes";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import geekmitive from "../assets/img/geekmitive.jpg";
import reactSpringboot from "../assets/img/react-springboot.png";
import apiNASA from "../assets/img/apis-nasa.png";
import earthquakeImg from "../assets/img/earthquake-catalog.png";

const Projects = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className={`projects ${theme}`} id="projects">
      <Container>
        <h1>Mis Proyectos</h1>
        <Row>
          <Col sm={6} lg={4} className="col-options">
            <div className={`card-${theme}`}>
              <img src={geekmitive} className="card-img" alt="img"></img>
              <h4 className="card-h4" onClick={() => setOpen(!open)}>
                Proyecto eCommerce
              </h4>
              <Collapse in={open}>
                <div className={`colapse-text-${theme}`}>
                  ¡Bienvenidos a la presentación de eCommerce 'Geekmitive'!
                  Durante este proyecto, tuve un papel activo en el desarrollo
                  del frontend, utilizando tecnologías como HTML5, CSS3,
                  Javascript y Bootstrap. Además, contribuí al desarrollo del
                  backend utilizando Java y Spring Boot, y me encargué de
                  gestionar las bases de datos utilizando MySQL. A lo largo de
                  este proceso, pude aplicar mis habilidades técnicas y mi
                  conocimiento en el desarrollo de aplicaciones web para crear
                  una experiencia de compra fluida y atractiva en 'Geekmitive'.
                </div>
              </Collapse>
              <div className="buttons-project">
                <Button
                  className={`button-project-${theme}`}
                  href="https://geekmitive.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Demo
                </Button>
                <Button
                  className={`button-project-${theme}`}
                  href="https://github.com/ArturoCarmona/primitive"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Repositorio
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} className="col-options">
            <div className={`card-${theme}`}>
              <img src={reactSpringboot} className="card-img" alt="img"></img>
              <h4 className="card-h4" onClick={() => setOpen2(!open2)}>
                Proyecto React + Springboot
              </h4>
              <Collapse in={open2}>
                <div className={`colapse-text-${theme}`}>
                  Implementación de desarrollo full stack. En este proyecto,
                  utilicé el poderoso framework React en el frontend para crear
                  una interfaz de usuario moderna y dinámica. Además, en el
                  backend, empleé una arquitectura basada en API Rest utilizando
                  Java, Spring Boot y una base de datos MySQL.
                </div>
              </Collapse>
              <div className="buttons-project">
                <Button
                  className={`button-project-${theme}`}
                  href="https://react-springboot-full.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Demo
                </Button>
                <Button
                  className={`button-project-${theme}`}
                  href="https://github.com/ArturoCarmona/React-Springboot-Frontend"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Repositorio
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} className="col-options">
            <div className={`card-${theme}`}>
              <img src={apiNASA} className="card-img" alt="img"></img>
              <h4 className="card-h4" onClick={() => setOpen3(!open3)}>
                Proyecto APIs NASA
              </h4>
              <Collapse in={open3}>
                <div className={`colapse-text-${theme}`}>
                  Implementación de APIs proporcionadas por la NASA. Utilizando
                  una combinación de tecnologías, como la librería Lit-element,
                  HTML, CSS, JavaScript y el framework React, desarrollé
                  componentes web de vanguardia. Durante la implementación,
                  aproveché al máximo las APIs de la NASA para acceder a datos
                  fascinantes, como imágenes de la Tierra, información sobre
                  asteroides, datos astronómicos y mucho más. Utilicé
                  Lit-element para crear componentes web altamente
                  personalizables y reutilizables, lo que permitió una
                  experiencia de usuario fluida y atractiva.
                </div>
              </Collapse>
              <div className="buttons-project">
                <Button
                  className={`button-project-${theme}`}
                  href="https://apis-nasa.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Demo
                </Button>
                <Button
                  className={`button-project-${theme}`}
                  href="https://github.com/ArturoCarmona/APIs-NASA"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Repositorio
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} lg={4} className="col-options">
            <div className={`card-${theme}`}>
              <img src={earthquakeImg} className="card-img" alt="img"></img>
              <h4 className="card-h4" onClick={() => setOpen4(!open4)}>
                Proyecto USGS Earthquake Catalog
              </h4>
              <Collapse in={open3}>
                <div className={`colapse-text-${theme}`}>
                  Implementación de un catálogo de terremotos utilizando la API
                  de la USGS, junto con la API de ArcGIS para visualizar los
                  mapas correspondientes. En este proyecto, se desarrollaron
                  componentes web utilizando Lit-element, aprovechando las
                  capacidades de HTML5, CSS3 y JavaScript. Además, se utilizó el
                  framework React para presentar de manera eficiente los
                  componentes web en la interfaz del usuario.
                </div>
              </Collapse>
              <div className="buttons-project">
                <Button
                  className={`button-project-${theme}`}
                  href="https://earthquake-component.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Demo
                </Button>
                <Button
                  className={`button-project-${theme}`}
                  href="https://github.com/ArturoCarmona/USGS-earthquake"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Repositorio
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
