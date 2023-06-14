import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import DarkModeToggle from '../../../components/SectionTitle/DarkModeToggle';
import styled from 'styled-components';
import Fascility from '../Fascility';
import Galary from '../Galary/Galary';
import Review from '../Review';


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const StyledDiv = styled.div`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 16px;
`;

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <StyledDiv>
      <Banner />
      
      <Popular />
      <Fascility></Fascility>
      <Galary></Galary>
      <Review></Review>
      </StyledDiv>
    </div>
  );
};

export default Home;
