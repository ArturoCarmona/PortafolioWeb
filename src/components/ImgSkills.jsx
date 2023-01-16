import React from 'react';
import {useTheme} from './Themes';
import Sistema from '../assets/img/sistema-solar.png';
import Sol from '../assets/img/dom.png';

const ImgSkills = () => {
    const {theme} = useTheme();
    let ImgIns = "";
    if(theme === 'dark') ImgIns = Sistema;
    else ImgIns = Sol;
    
    return(
        <img src={ImgIns} alt="insignia" className="img-insignia"></img>
    );
}

export default ImgSkills;