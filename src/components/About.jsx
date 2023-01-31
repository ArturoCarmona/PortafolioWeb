import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {useTheme} from './Themes';
import CV from '../assets/img/CV.pdf';
import {FaDownload} from "react-icons/fa";
import ImgAbout from './ImgAbout';
import "../styles/index.css";
import "../styles/About.css";

const About = () =>{
    const {theme} = useTheme();
    return(
        <div className={`banner ${theme}`} id='banner'>
            <Container>
            <Row>
                <Col xs={12} md={6} xl={7} className="about-text">

                    <h6>Hola! soy</h6>
                    <h1>Arturo</h1>
                    <h5>Desarrollador Java Full Stack</h5>
                    <h5>Ingeniero Geofísico</h5>
                    <p>El haberme formado como Ingeniero Geofisíco me ayudo a</p>
                    <p>fortalecer mi razonamiento lógico y adquirir habilidades para resolución de problemas.</p>
                    <p>Mismas que me han permitido formarme como Desarrollador Java y seguir preparandome</p>
                    <p>para afrontar cada reto con la mayor preparación.</p>
                    <div className="buttons-about">
                        <a href={CV} download="CV" className={`a-about-${theme}`}>
                                CV   <FaDownload size={25}></FaDownload>
                        </a>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5} className="align-img">
                    <ImgAbout></ImgAbout>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About;