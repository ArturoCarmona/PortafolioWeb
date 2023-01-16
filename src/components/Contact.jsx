import React , {useRef} from "react";
import {motion} from 'framer-motion';
import "../styles/Contact.css";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {useTheme} from './Themes';
import emailjs from 'emailjs-com';
import {FaEnvelope, FaFacebook, FaWhatsapp} from "react-icons/fa";

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
                    <Col className="contact-options" md={6}>
                        <div className={`contact-option-${theme}`}>
                            <motion.div animate={{rotate:90}} transition={{duration:2, repeat: Infinity, repeatType:"reverse"}} className="icon-contact">
                                <FaEnvelope></FaEnvelope>
                            </motion.div>
                            <h3>Email</h3>
                            <h5>gabriel.arturoguzmanc@gmail.com</h5>
                            <Button className={`button-contact-${theme}`} href="mailto:gabriel.arturoguzmanc@gmail.com" target={"_blank"} rel="noreferrer">Enviar mensaje</Button>
                        </div>
                        <div className={`contact-option-${theme}`}>
                            <motion.div animate={{rotate:90}} transition={{duration:2, repeat: Infinity, repeatType:"reverse"}} className="icon-contact">
                                <FaFacebook className="icon-contact"></FaFacebook>
                            </motion.div>
                            <h3>Messenger</h3>
                            <h5>Gabriel Arturo</h5>
                            <Button className={`button-contact-${theme}`} href="https://m.me/gabriel.arturo.52" target={"_blank"} rel="noreferrer">Enviar mensaje</Button>
                        </div>
                        <div className={`contact-option-${theme}`}>
                            <motion.div animate={{rotate:90}} transition={{duration:2, repeat: Infinity, repeatType:"reverse"}} className="icon-contact">
                                <FaWhatsapp className="icon-contact"></FaWhatsapp>
                            </motion.div>
                            <h3>WhatsApp</h3>
                            <h5>(+52) 55 ...</h5>
                            <Button className={`button-contact-${theme}`} href="https://api.whatsapp.com/send?phone=+525529479308" target={"_blank"} rel="noreferrer">Enviar mensaje</Button>
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