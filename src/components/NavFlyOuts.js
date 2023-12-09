import React, { useEffect } from 'react'

export default function NavFlyOuts() {
    
  return (
    <>
    <div className='relative w-full h-0'>
        <div className='absolute w-full h-full flex' id='FlyOutAcnhor'>
            <div className='relative left-[1150px] w-fit border border-yellow-200'>
                <div className='bg-white'>Main Content</div>
                <div className='absolute h-3 -top-3 left-3 rounded-tl-full rounded-tr-full w-5 bg-white'></div>
                
            </div>
            <div>1</div>
            <div>1</div>
        </div>
    </div>
    </>
  )
}
