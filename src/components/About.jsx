import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "../styles/About.css";
import {useTheme} from './Themes';
import "../styles/index.css"
import CV from '../assets/img/CV.pdf';
import {FaDownload, FaLinkedin, FaInstagram, FaGithub, FaComments} from "react-icons/fa";
import ImgAbout from './ImgAbout';

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
                    <h5>Ingeníero Geofísico</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum esse quod consectetur? Quis, ipsam sed nam in odio voluptate ea fugit, numquam quaerat mollitia accusamus minima esse dolor ullam ex!</p>
                    <div className="buttons-about">
                        <a href={CV} download="CV" className={`a-about-${theme}`}>
                                CV   <FaDownload size={25}></FaDownload>
                        </a>
                        {/* <a href="#Contact" className="a-about"> Contactame   <FaComments size={25}></FaComments>
                        </a> */}
                    </div>
                    <div className={`about-social-icon-${theme}`}>
                        <a href="https://www.linkedin.com/in/garturogc/" target={"_blank"} rel="noreferrer"><FaLinkedin className="social-icon"/></a>
                        
                        <a href="https://github.com/ArturoCarmona" target={"_blank"} rel="noreferrer"><FaGithub className="social-icon"/></a>
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