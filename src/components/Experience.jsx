import React from 'react';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap';
import {useTheme} from './Themes';
import Carousel from 'react-multi-carousel';
import JsIco from '../assets/img/javascript.ico.png';
import CSSIco from '../assets/img/css-3.png';
import HTMLIco from '../assets/img/html-5.png';
import ReactIco from '../assets/img/physics.png';
import JavaIco from '../assets/img/java.png';
import PythonIco from '../assets/img/python.png';
import BootIco from '../assets/img/bootstrap.png';
import VSIco from '../assets/img/visual-studio.png';
import GitIco from '../assets/img/git-logo.png';
import ImgSkills from './ImgSkills';
import MySQL from '../assets/img/mysql.png';
import Spring from '../assets/img/spring.png';
import 'react-multi-carousel/lib/styles.css';
import "../styles/Experience.css";

const Experience = () =>{
    const {theme} = useTheme();

    const responsive = {
        desktop:{
            breakpoint:{max: 3000, min: 1024},
            items: 3
        },
        tablet:{
            breakpoint:{max: 1024, min: 464},
            items: 2
        },
        mobile:{
            breakpoint:{max: 464, min: 0},
            items: 1
        }
    };

    const softSkills =['Honestidad', 'Lealtad','Compromiso', 'Orientación al detalle',
     'Trabajo en equipo','Autodidacta', 'Orientación al futuro']
    const listItems = softSkills.map( (softSkill, index) =>
        <li key={index}>{softSkill}</li>
        );
    
    return(
        <div className={`skills ${theme}`} id='skills'>
            <Container>
                <h1>Mis Habilidades</h1>
                <Row>
                    <Col className={`skills-box-${theme}`}>
                    <h2 className={`h2-hard-${theme}`}>Hard Skills</h2>
                            <Carousel responsive={responsive} autoPlaySpeed={300} transitionDuration={300} infinite={true} className="carousel-skills">
                                <motion.div className={`item-${theme}`} >
                                    <img src={JsIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={CSSIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={HTMLIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={ReactIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Básico</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={JavaIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={BootIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={PythonIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Básico</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={VSIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={GitIco} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={MySQL} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                                <motion.div className={`item-${theme}`} >
                                    <img src={Spring} alt="icon" className="img-skills"></img>
                                    <h6 className="h6-hard">Intermedio</h6>
                                </motion.div>
                            </Carousel>
                    </Col>
                </Row>
                <Row>    
                    <Col sm={6}>
                        <motion.div animate={{rotate:360}} transition={{ease:"linear", duration:10, repeat:Infinity}} className="insignia">
                            <ImgSkills></ImgSkills>
                        </motion.div>
                    </Col>
                    <Col sm={6}>
                        <div className={`soft-box-${theme}`}>
                            <h2 className={`h2-soft-${theme}`}>Soft Skills</h2>
                            <ul>
                                {listItems}
                            </ul> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;