import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import HomeEnglish from './components/English/HomeEnglish';
import NavbarEnglish from './components/English/NavbarEnglish';

const App = () => {
  const [language, setLanguage] = useState('Spanish');
  return (
    <div>
      {language === 'Spanish' ? (
        <div>
          <NavBar setLanguage={setLanguage}/>
          <Home />
        </div>
      ) : (
        <div>
          <NavbarEnglish setLanguage={setLanguage}/>
          <HomeEnglish />
        </div>
      )}
    </div>
  );
}

export default App;