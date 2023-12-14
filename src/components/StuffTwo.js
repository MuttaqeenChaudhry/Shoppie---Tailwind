import React from 'react'

export default function StuffTwo(props) {
  return (
    <div className='w-40'>
      <a href={props.Link}>
        <img src={props.Img} className='h-full' alt="Error" />
      </a>
    </div>
  )
}
