import React, {createContext, useContext, useState} from 'react';
import useLocalStorage from 'use-local-storage';

const ThemeContext = createContext();

function ThemeProvider(props){
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark':'light');
    const toggleTheme = () => theme === 'light' ? setTheme('dark'):setTheme('light');
    const value={theme, toggleTheme};
    return <ThemeContext.Provider value={value} {...props}/>;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme};