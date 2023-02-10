import React, {useState} from "react";
import "../styles/Projects.css";
import {useTheme} from './Themes';
import {Container, Row, Col, Collapse, Button} from 'react-bootstrap';
import geekmitive from '../assets/img/geekmitive.jpg';
import reactSpringboot from '../assets/img/react-springboot.png';
import disponible from '../assets/img/disponible.jpg';

const Projects = () =>{
    const {theme} = useTheme();
    const [open, setOpen] =useState(false);
    const [open2, setOpen2] =useState(false);
    const [open3, setOpen3] =useState(false);

    return(
        <div className={`projects ${theme}`} id='projects'>
            <Container>
            <h1>Mis Proyectos</h1>
                <Row>
                    <Col sm={6} lg={4} className="col-options">
                        <div className={`card-${theme}`}> 
                            <img src={geekmitive} className="card-img" alt="img"></img>       
                            <h4 className="card-h4" onClick={ () => setOpen(!open)}>Proyecto eCommerce</h4>
                            <Collapse in={open}>
                                <div className={`colapse-text-${theme}`}>
                                    eCommerce "Geekmitive", donde participe de manera activa en el desarrollo frontend y backend.
                                </div>
                            </Collapse>
                            <div className="buttons-project">
                            <Button className={`button-project-${theme}`} href="https://geekmitive.netlify.app/" target={"_blank"} rel="noreferrer">Demo</Button>
                            <Button className={`button-project-${theme}`} href="https://github.com/ArturoCarmona/primitive" target={"_blank"} rel="noreferrer">Repositorio</Button>
                            </div>
                            
                        </div>
                    </Col>
                    <Col sm={6} lg={4} className="col-options">
                        <div className={`card-${theme}`}> 
                            <img src={reactSpringboot} className="card-img" alt="img"></img>       
                            <h4 className="card-h4" onClick={ () => setOpen2(!open2)}>Proyecto React + Springboot</h4>
                            <Collapse in={open2}>
                                <div className={`colapse-text-${theme}`}>
                                    Demostración de desarrollo full stack. Utilizando el framework React en el frontend y haciendo uso de API Rest en backend con springboot y MySQL.
                                </div>
                            </Collapse>
                            <div className="buttons-project">
                            <Button className={`button-project-${theme}`} href="https://react-springboot-full.netlify.app/" target={"_blank"} rel="noreferrer">Demo</Button>
                            <Button className={`button-project-${theme}`} href="https://github.com/ArturoCarmona/React-Springboot-Frontend" target={"_blank"} rel="noreferrer">Repositorio</Button>
                            </div>
                            
                        </div>
                    </Col>
                    <Col sm={6} lg={4} className="col-options">
                        <div className={`card-${theme}`}> 
                            <img src={disponible} className="card-img" alt="img"></img>       
                            <h4 className="card-h4" onClick={ () => setOpen3(!open3)}>Proyecto Disponible</h4>
                            <Collapse in={open3}>
                                <div className={`colapse-text-${theme}`}>
                                   
                                </div>
                            </Collapse>
                            <div className="buttons-project">
                            <Button className={`button-project-${theme}`} href="#" target={"_blank"} rel="noreferrer">Demo</Button>
                            <Button className={`button-project-${theme}`} href="#" target={"_blank"} rel="noreferrer">Repositorio</Button>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Projects;