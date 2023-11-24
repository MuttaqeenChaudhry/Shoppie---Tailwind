import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NavMenu(props) {
  return (
    <>
    <div id='NavMenu' style={{display : props.navMenu}} className='fixed right-0 top-0 h-full sm:w-1/2 md:w-1/4 bg-slate-500'>
        <div className='flex flex-row w-full h-fit justify-between'>
            <div><FontAwesomeIcon onClick={props.handleMenu} icon={faClose} className='pl-4 cursor-pointer'/></div>
            <div className='pr-4'><button className='bg-violet-600'>Reigister</button></div>

        </div>
    </div>
    </>
  )
}
