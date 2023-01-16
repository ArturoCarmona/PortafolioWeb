import{Navbar, Nav, Container} from 'react-bootstrap';
import { React, useState, useEffect } from "react";
import {FaAdn, FaPowerOff, FaComments} from "react-icons/fa";
import {useTheme} from './Themes';
import '../styles/NavBar.css';
import '../styles/index.css';

const NavBar = () =>{

const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if(window.scrollY >50)setScrolled(true);
        else setScrolled(false);
    }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);
},[]);

const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
}

const {theme, toggleTheme} = useTheme();
    return(
        <div>
            <Navbar expand="lg" className={scrolled ? `scrolled-${theme}`:`${theme}`}>
                <Container>
                    <Navbar.Brand href="#home">
                        <FaAdn className="Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="ham" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="data-collapsed" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} 
                        onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link':'navbar-link'} 
                        onClick={() => onUpdateActiveLink('experince')}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} 
                        onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <div className="on-off">
                        <button className={`switch-${theme}`} onClick={toggleTheme}><FaPowerOff size={25}></FaPowerOff></button>
                        {/* <FaPowerOff className="switch" onClick={toggleTheme}></FaPowerOff> */}
                    </div>
                    <div className="navbar-text">    
                        <a href="#contact" className="button-nb">Contactame  <FaComments size={25}></FaComments></a>
                    </div>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
  );
}

export default NavBar;