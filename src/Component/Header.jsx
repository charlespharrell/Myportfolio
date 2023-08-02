import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import './Header.css'

function Header({imgsrc, header, }) {
  return (
    <div>
        <header className={header}>
            <div class="user">
                <img className='img' src={imgsrc} alt="" /> 
                <h3>CHARLES UDENWOKE</h3>
                <p>Front end software Engineer</p>
            </div>

    
      <nav  className='navbar'>
           <Link className='link' to='#home'  smooth><li>Home</li></Link> 
            <Link className='link' to='#about'  smooth> <li>About</li> </Link>
            <Link className='link' to='#skills'  smooth> <li>Skills</li> </Link>
            <Link className='link' to='#portfolio' smooth><li>Portfolio</li> </Link>
            <Link className='link' to='#contact'  smooth><li>Contact</li> </Link>
            
        </nav>
      
     </header>
    </div>
  )
}

export default Header