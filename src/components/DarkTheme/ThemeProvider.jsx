import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Theme';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button className="toggle-button" onClick={toggleTheme}>
    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
  </button>
);

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      
        <button  className='fixed z-10 px-2 rounded-xl' ><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></button>
     
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
