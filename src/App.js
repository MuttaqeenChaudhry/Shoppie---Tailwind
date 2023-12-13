import React, { useRef, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Shoppie from './components/Shoppie';

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

  const BodyShadow = (Stat) => {
    const BodyShadow = document.getElementById('BodyShadow');
    Stat == 1 ? BodyShadow.classList.add('ShoppieShadow') : BodyShadow.classList.remove('ShoppieShadow');
  }

 

  return (
    <>
    <div style={{zIndex:'150'}}>
    <NavMenu ref={HamContnrRef} NvMnDisp={NvMDp} HandleNavMenu={HNvMenu}/>
    </div>
    <div id='RC_KR'>  
    <NavBar HandleNavMenu={HNvMenu} BodyShadow={BodyShadow}/>
    <div id='BodyShadow'>
    <Shoppie/>
    </div>
    </div>
   

    </>
  );
}

export default App;
