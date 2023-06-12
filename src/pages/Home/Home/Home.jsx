import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import DarkModeToggle from '../../../components/SectionTitle/DarkModeToggle';


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <Banner />
      <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeChange} />
      <Popular />
    </div>
  );
};

export default Home;
