import React from 'react'
import './Theme.css'

function Theme({handleClick, icon}) {
  return (
    <div>
         <div onClick={handleClick} className='BsCircle'>{icon}</div>
    </div>
  )
}

export default Theme