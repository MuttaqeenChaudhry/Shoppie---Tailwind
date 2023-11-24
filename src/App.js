import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

function App() {
  const[navMenu, setnavMenu] = useState('none');
  const handleMenu = () => {
    if(navMenu === 'none')
    {
      setnavMenu('block')
    }
    else
    setnavMenu('none')

  }
  return (
    <>
    <NavBar handleMenu = {handleMenu}/>
    <NavMenu navMenu= {navMenu}/>
    </>
  );
}

export default App;
