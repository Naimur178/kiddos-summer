import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#ffffff',
  text: '#333333',
  navbarBackground: '#ffffff',
  toggleButtonBackground: '#dddddd',
  toggleButtonIcon: '#333333',
};

export const darkTheme = {
  body: '#333333',
  text: '#ffffff',
  button: '#999999',
  navbarBackground: '#333333',
  toggleButtonBackground: '#222222',
  toggleButtonIcon: '#ffffff',
  cardBg: '333333',
  navSmallBG: '333333'
  
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }

  .navbar {
    background-color: ${props => props.theme.navbarBackground};
  }

  .toggle-button {
    background-color: ${props => props.theme.toggleButtonBackground};
    color: ${props => props.theme.toggleButtonIcon};
  }
  .course-card {
    background-color: ${props => props.theme.cardBg};
  }
  .navbar button {
    background-color: ${props => props.theme.button};
  }
  .card-actions button {
    background-color: ${props => props.theme.button};
  }
  .navbar ul .nav small ${props => props.theme.navSmallBG}
  
`;
