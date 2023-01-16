import React from 'react';
import {useTheme} from './Themes';
import Astronaut from '../assets/img/moon-astro.jpg';
import Earth from '../assets/img/earth-scuva.jpg';

const ImgAbout = () => {
    const {theme} = useTheme();
    let ImgTheme = "";
    if(theme === 'dark') ImgTheme = Astronaut;
    else ImgTheme = Earth;
    
    return(
        <img src={ImgTheme} alt="Img-About"></img>
    );
}

export default ImgAbout;