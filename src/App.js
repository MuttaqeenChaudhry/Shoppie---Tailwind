import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Shoppie from './components/Shoppie';

function App() {
  const[NvMDp, setNvMDp] = useState('none');
  const HNvMenu = () => {
    const RC_KR = document.getElementById('RC_KR');
    setNvMDp('block')
    document.body.style.overflow = 'hidden';
    RC_KR.classList.add('blob')
  }

  return (
    <>
    <NavMenu NvMnDisp={NvMDp}/>
    <div id='RC_KR'>    
    <NavBar HandleNavMenu={HNvMenu}/>
    <Shoppie/>
    </div>

    </>
  );
}

export default App;
