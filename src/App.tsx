import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HeroSection from './components/HeroSection';
import Animals from './components/Animals';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Projects/>
      <Animals/>
    </div>
  );
}

export default App;
