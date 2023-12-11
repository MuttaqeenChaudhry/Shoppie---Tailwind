import { faCircle, faCircleArrowDown, faCircleCheck, faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

export default function NavFlyOuts() {
  useEffect(()=>{
    const SignInFlyout = document.getElementById('SignInFlyout');
    SignInFlyout.style.display = 'block';
    SignInFlyout.classList.add('animate-fadeIn');
    SignInFlyout.addEventListener('animationend', ()=>{
    SignInFlyout.classList.remove('animate-fadeIn');
    })
    setTimeout(() => {
      SignInFlyout.classList.add('animate-fadeOut');
      SignInFlyout.addEventListener('animationend', ()=>{
        SignInFlyout.classList.remove('animate-fadeOut');
        SignInFlyout.style.display = 'none';
        })
    }, 9000);
   

  },[])
    
  return (
    <>
    <div className='relative w-0 h-0'>
        <div className='absolute left-0 w-full h-fit flex' id='FlyOutAcnhor'>
            <div style={{display:'none'}} className='relative h-fit w-fit z-50 -top-1 left-[1150px] border border-gray-300'>
                <div className='absolute h-3 -top-3 left-3 rounded-tl-full rounded-tr-full w-5 bg-white border border-b-0 border-gray-300'/>
                <div className='w-[240px] p-2 h-fit bg-white'>
                  <div className='w-[97%] m-auto'>
                  <span className='text-sm'>
                    <span>Change Language <a className='text-xs text-emerald-700 hover:text-orange-700 hover:underline' href="#">Learn More</a></span>
                  </span>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i className='hover:no-underline'><FontAwesomeIcon icon={faCircle}/> </i>
                    <span className=''>
                      <span>English</span> - <span>EN</span>
                    </span>
                  </a>
                  <div className='border-b-2'/>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> español</span> - <span>ES</span>
                    </span>
                  </a>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> العربية</span> - <span>AR</span>
                    </span>
                  </a>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> Deutsch</span> - <span>DE</span>
                    </span>
                  </a>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> עברית</span> - <span>HE</span>
                    </span>
                  </a>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> 한국어</span> - <span>KO</span>
                    </span>
                  </a>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> português</span> - <span>PT</span>
                    </span>
                  </a>
                  <a href="#" className='block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline'>
                    <i><FontAwesomeIcon icon={faCircle}/></i>
                    <span>
                      <span> 中文 (简体)</span> - <span>ZH</span>
                    </span>
                  </a>
                  <div className='border-b-2'/>
                  <span className='text-sm block'>
                    <span>Change currency <a className='text-xs text-emerald-700 hover:text-orange-700 hover:underline' href="#">Learn More</a></span>
                  </span>
                  <span className='text-sm flex justify-between'>
                    <span>$ - USD - US Dollar </span>
                    <a className='text-xs text-emerald-700 hover:text-orange-700 hover:underline' href="#">Change</a>
                  </span>
                  </div>        
                </div>      
            </div>
            <div id='SignInFlyout' style={{display:'none'}} className='relative h-fit w-fit z-50 -top-1 left-[1190px] border border-gray-300'>
                <div className='absolute h-3 w-5 -top-3 right-3 rounded-tl-full rounded-tr-full bg-white border border-b-0 border-gray-300'/>
                <div className='w-[160px] p-2 h-fit bg-white'>
                  <div className='w-[97%] m-auto'>
                    <a className='block  p-2 w-[98%] text-center bg-violet-800 rounded-md text-xs text-white' href="">Sign in</a>
                  <span className='text-xs'>
                    <span>New customer? <a className='text-xs text-emerald-700 hover:text-orange-700 hover:underline' href="#">Start here.</a></span>
                  </span>
                  </div>        
                </div>      
            </div>
            
            
        </div>
    </div>
    </>
  )
}
