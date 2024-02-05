import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Latest } from './components/Latest.tsx';
import { LiveEvents } from './components/LiveEvents.tsx';
import { GamePass } from './components/GamePass.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { Roster } from './components/Roster.tsx';
import { Footer } from './components/Footer.tsx';
import { Service } from './components/Service.tsx';
import { Contact } from './components/Contact.tsx';
import GameTest from './components/GameTest.jsx';
import GameTesting from './components/GameTesting.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Latest />
      <LiveEvents />
      <GameTest />
      <GamePass />
      <GameTesting />
      <AboutUs />
      <Footer />
      <Roster />
      <Service />
      <Contact />


    </>
    
    

  );
  
}

export default App;
