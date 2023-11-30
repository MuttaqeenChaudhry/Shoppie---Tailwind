import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Shoppie from './components/Shoppie';

function App() {
  const[NvMDp, setNvMDp] = useState('none');
  const HNvMenu = () => {
    const RC_KR = document.getElementById('RC_KR');
    if (NvMDp == 'none') {
      setNvMDp('block');
      document.body.style.overflow = 'hidden';
      RC_KR.classList.add('Shadowed');
    } else {
      setNvMDp('none');
      document.body.style.overflowY = 'scroll';
      RC_KR.classList.remove('Shadowed');
    }
   
  }

  return (
    <>
    <NavMenu NvMnDisp={NvMDp} HandleNavMenu={HNvMenu}/>
    <div style={{height:'100vh'}} id='RC_KR'>  
    <NavBar HandleNavMenu={HNvMenu}/>
    <Shoppie/>
    </div>
   

    </>
  );
}

export default App;
