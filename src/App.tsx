import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Projects/>
    </div>
  );
}

export default App;
