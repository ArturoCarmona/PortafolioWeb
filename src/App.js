import React from 'react';
import Navbar from './components/NavBar.jsx';
import About from '../src/components/About.jsx';
import Experience from '../src/components/Experience.jsx';
import Projects from '../src/components/Projects.jsx';
import Contact from '../src/components/Contact.jsx';
import Footer from '../src/components/Footer.jsx';
import '../src/styles/App.css';
import ThemeProvider from './components/Themes.jsx';

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar></Navbar>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
