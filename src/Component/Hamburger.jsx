import React from 'react'
import './Hamburger.css'
function Hamburger({handleclickmenu, hamwrapper, ham_icon}) {
  return (
    <div><div onClick={handleclickmenu} className={hamwrapper}>
    {ham_icon}   
  </div></div>
  )
}

export default Hamburger