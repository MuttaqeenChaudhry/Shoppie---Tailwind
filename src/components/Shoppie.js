import React, { useEffect } from 'react';
import C_Img_1 from '../assets/Images/1.jpg';
import C_Img_2 from '../assets/Images/2.jpg';
import C_Img_3 from '../assets/Images/3.jpg';
import C_Img_4 from '../assets/Images/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Shoppie() { 
  useEffect(()=>{
    const CrosulContainer = document.getElementById('CrosulContainer');
    const Imgs = CrosulContainer.querySelectorAll('.CarslImg');
    console.log(Imgs)
    let InitIndex = 0;
    const DispImg = (index) => {
    Imgs.forEach((Img, i) => {
    i === index ? Img.style.display = 'block' : Img.style.display = 'none';      
    });
    }
    DispImg(InitIndex);
    setInterval(() => {
      InitIndex = (InitIndex + 1) % Imgs.length;
      DispImg(InitIndex)
      
    }, 15000);
  },[])  
  return (
    <>
    <div id='PageContenet'>
      <div className='h-screen'>
        <div style={{width:'99%'}} id='CrosulContainer' className='flex items-center relative m-auto h-fit shadow-'>
          <img className='CarslImg' src={C_Img_1} alt="" />
          <img className='CarslImg' src={C_Img_2} alt="" />
          <img className='CarslImg' src={C_Img_3} alt="" />
          <img className='CarslImg' src={C_Img_4} alt="" />
          <div className='absolute top-1/4 flex w-full justify-between'>
            <button className='ml-2'><FontAwesomeIcon icon={faArrowLeft} size='2xl' color='white'/></button>
            <button className='mr-2'><FontAwesomeIcon icon={faArrowRight} size='2xl' color='white'/></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
