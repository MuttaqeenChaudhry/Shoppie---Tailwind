import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Shoppie from './components/Shoppie';
import NavFlyOuts from './components/NavFlyOuts';

function App() {
  const[NvMDp, setNvMDp] = useState('none');
  const HamContnrRef = useRef(null);
  const HNvMenu = () => {
    const HBurgContan = HamContnrRef.current.querySelector('#HamBurgContainer');
    const RC_KR = document.getElementById('RC_KR');  
    if (NvMDp == 'none') {
      HBurgContan.classList.remove('animate-rtl384');
      HBurgContan.classList.add('animate-ltr1');
      setNvMDp('block');
      document.body.style.overflow = 'hidden';
      RC_KR.classList.add('Shadowed');
    } else {
      setTimeout(() => {
        setNvMDp('none');
      }, 250); 
        document.body.style.overflowY = 'scroll';
        RC_KR.classList.remove('Shadowed');  
    }   
  }

 

  return (
    <>
    <NavMenu ref={HamContnrRef} NvMnDisp={NvMDp} HandleNavMenu={HNvMenu}/>
    <div style={{height:'100vh'}} id='RC_KR'>  
    <NavBar HandleNavMenu={HNvMenu}/>
    <Shoppie/>
    </div>
   

    </>
  );
}

export default App;
