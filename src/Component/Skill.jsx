import React from 'react'
import './Skill.css'

function Skill() {
  return (
    <section class="skills" id="skills">
      <h1 class="heading">my <span>skills</span></h1>

      <div class="box-container">

        <div class="box">
          <img src="./image/html-icon2-removebg-preview.png" alt="" className='icon-image' />
          <h3>html</h3>  
        </div>

        <div class="box">
          <img src="./image/css-icon2-removebg-preview.png" alt=""className='icon-image' />
          <h3>CSS</h3>
          
        </div>

        <div class="box">
          <img src="./image/bootstrap-icon-removebg-preview.png" alt="" className='icon-image' />
          <h3>bootstrap</h3>
        </div>

        <div class="box">
          <img src="./image/jquery-icon2-removebg-preview.png" alt="" className='icon-image'/>
          <h3>Juery</h3>
        </div>

        <div class="box">
          <img src="./image/javascript-icpn-removebg-preview.png" alt="" className='icon-image' />
          <h3>JavaScript</h3>
        </div>

        <div class="box">
          <img src="./image/react-icon-removebg-preview.png" alt="" className='icon-image' />
          <h3>React</h3>
          </div>

          <div class="box">
            <img src="./image/git-icon-removebg-preview.png" alt="" className='icon-image' />
            <h3>Git</h3>        
        </div>

      </div>
    </section>
  )
}

export default Skill