import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

function App() {
  const[navMenu, setnavMenu] = useState('none');
  const handleMenu = () => {
    const NavMenu = document.getElementById('NavMenu');
    if(navMenu === 'none')
    {
      NavMenu.classList.remove('FadeOut')
      NavMenu.classList.remove('FadeIn')
      NavMenu.classList.add('FadeIn')
      setnavMenu('block')
    }
    else
    {
      NavMenu.classList.remove('FadeOut')
      NavMenu.classList.add('FadeOut')
      setTimeout(() => {
          setnavMenu('none');
      }, 1800);
    }

  }
  return (
    <>
    <NavBar handleMenu = {handleMenu}/>
    <NavMenu navMenu= {navMenu} handleMenu = {handleMenu}/>
    </>
  );
}

export default App;
