import React from 'react'
import './Home.css'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

function Home() {
  return (
      <section class="home" id="home">
      <div class="content">
        <h3>CHARLES UDENWOKE</h3>
        <p>I am a Frontend Software Engineer</p>
        <p>+2349067131362</p>
        <p>charlesudenwoke011@gmail.com</p>
        <a href ='https://docs.google.com/document/d/1DFhpi2aHvOMTDRynhRaM0UysYLnnHTOq/edit?usp=sharing&ouid=106768816007155417987&rtpof=true&sd=true' class="btn">download CV</a>
      </div>

      <div class="share">
        <a href="https://www.facebook.com/charlesemeka.udenwoke" class="fab fa-facebook-f" target="_blank"><FaFacebook className='social' /></a>
        <a href="https://twitter.com/charlespharrell" class="fab fa-twitter" target="_blank"><FaTwitter className='social'/></a>
        <a href="https://www.instagram.com/charlespharrell/" class="fab fa-instagram" target="_blank"><FaInstagram className='social'/></a>
        <a href="https://www.linkedin.com/in/udenwoke-charles-238142188/" class="fab fa-linkedin" target="_blank"><FaLinkedin className='social'/></a>
        <a href="https://github.com/charlespharrell" class="fab fa-github"><FaGithub className='social' /></a>
      </div>
    </section>
  )
}

export default Home