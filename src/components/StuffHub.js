import React from 'react'
import StuffOne from './StuffOne';
import exampleimg from '../assets/Images/P1.jpg'

export default function StuffHub() {
  return (
    <>
    <div className='absolute w-full h-fit top-2/4 bg-transparent'>
        <div style={{width:'98%'}} className='bg-transparent h-fit m-auto grid grid-cols-4 grid-rows-2 gap-y-6'>
            <StuffOne title='Beauty steals under $25' img={exampleimg}/>
            <StuffOne title='Shop holiday gift guides'/>
            <StuffOne title='Easy updates for elevated spaces'/>
            <StuffOne title='Deals in PCs'/>
            <StuffOne title='Refresh your space'/>
            <StuffOne title='Gaming accessories'/>
            <StuffOne title='Toys under $25'/>
        </div>
    </div>
    </>
  )
}
