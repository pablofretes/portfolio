import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';

const App = () => {
  const [language, setLanguage] = useState('Spanish');
  return (
    <div>
      <NavBar language={language} setLanguage={setLanguage}/>
      <Home language={language}/>
    </div>
  );
}

export default App;