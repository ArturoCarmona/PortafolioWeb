import React , {useRef} from "react";
import "../styles/Contact.css";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {useTheme} from './Themes';
import emailjs from 'emailjs-com';
import Facebook from '../assets/img/facebook.png';
import Linkedin from '../assets/img/linkedin.png';
import Github from '../assets/img/github.png';
import Instagram from '../assets/img/instagram.png';

const Contact = () =>{
    const {theme} = useTheme();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fjwc824', 'template_als0x8t', form.current, 'kS0fBKjH9Q8xIBHUM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
          e.target.reset();
      };

    return(
        <div className={`contact ${theme}`} id="contact">
            <Container>
                <h1>Contactame</h1>
                <Row>
                    <Col md={6}>
                        <div className="contact-options">
                            <Col>
                            <a href="https://m.me/gabriel.arturo.52" target={"_blank"} rel="noreferrer"><img className={`icons-contact-${theme}`} src={Facebook} alt="facebook"></img></a>
                            <a href="https://github.com/ArturoCarmona" target={"_blank"} rel="noreferrer"><img className={`icons-contact-${theme}`} src={Github} alt="github"></img></a>
                            </Col>
                            <Col>
                            <a href="https://www.linkedin.com/in/garturogc/" target={"_blank"} rel="noreferrer"><img className={`icons-contact-${theme}`} src={Linkedin} alt="linkedin"></img></a>
                            <a href="https://www.instagram.com/gaboturo/" target={"_blank"} rel="noreferrer"><img className={`icons-contact-${theme}`} src={Instagram} alt="instagram"></img></a>
                            </Col>
                        </div>
                        
                        
                        
                    </Col>
                    <Col md={6}>
                        <div className="form">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group>
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Escribe tu nombre completo" required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control name="email" type="email" placeholder="example@email.com" required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control name="message" as="textarea" rows={7} placeholder="Escribe tu mensaje" required></Form.Control>
                            </Form.Group>
                            <Button className={`button-form-${theme}`} type="submit">Enviar</Button>
                        </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;