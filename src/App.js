import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Shoppie from './components/Shoppie';

function App() {
  const[navMenu, setnavMenu] = useState('none');
  const handleMenu = () => {
    const NavMenu = document.getElementById('NavMenu');
    const some1 = document.getElementById('some1');
    if(navMenu === 'none')
    {
      some1.classList.add('BgBlur')
      NavMenu.classList.remove('FadeOut')
      NavMenu.classList.remove('FadeIn')
      NavMenu.classList.add('FadeIn')
      setnavMenu('block')
    }
    else
    {
      some1.classList.remove('BgBlur')
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
    <div id='some1'>
    <Shoppie/>
    </div>
    </>
  );
}

export default App;
