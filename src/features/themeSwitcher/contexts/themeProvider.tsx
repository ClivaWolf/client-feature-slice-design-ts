import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContext } from './themeContext';

interface ThemeProviderProps {
 children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
 const [theme, setTheme] = useState<string>('light');

 useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
 }, []);

 useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
 }, [theme]);

 return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
 );
};

export default ThemeProvider;