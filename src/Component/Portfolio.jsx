import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section class="portfolio" id="portfolio">
      <h1 class="heading">my <span>project</span></h1>

      <div class="box-container">

      <div class="box">
          <img src="./image/ecommerce-shoe.PNG" alt="" />
          <div class="content">
            <h3>Ecommerce Shoes-website</h3>
            <p>This is a website where one can shop for shoes, and then add them to the cart.
              The shoes can be sorted out in different categories based on proces, colors, and even shoe type           
            </p>
            <h4 >Stack Used: React.js</h4>
            <a href="https://shoe-website-theta.vercel.app/">Visit demo</a>
          </div>
        </div>

        <div class="box">
          <img src=".\image\snake game.PNG" alt="" />
          <div class="content">
            <h3>Snake Game</h3>
            <p>This web game is just like the regular snake game we play on our phone where the snake moves
              to eat its food, and if it hits itself, its gameover
            </p>
            <h4 >Stack Used: JavaScript</h4>
            <a href="https://snake-game-sayg.vercel.app/">Visit demo</a>
          </div>
        </div>

        <div class="box">
          <img src="./image/countryimg.PNG" alt="" />
          <div class="content">
            <h3>Search Country</h3>
            <p>This is an web application where you can search for any country in the 
              world with some other details about the country like its population, etc.</p>
            <h4>Stack Used: React.js</h4>
            <a href="https://country-search-phi.vercel.app/" >Visit demo</a>
          </div>
        </div>

        <div class="box">
          <img src="./image/spaceimg.PNG" alt="" />
          <div class="content">
            <h3>Space Tourism Website</h3>
            <p>This is a website that shows different parts of the galaxy and professionals 
               in the field of space traveling.</p>
            <h4 >Stack Used: React.js</h4>
            <a href="https://spacetravelapp.netlify.app/">Visit demo</a>
          </div>
        </div>       

        <div class="box">
        <img src="./image/guessingimg.PNG" alt="" />
          <div class="content">
            <h3>Guess the number</h3>
            <p>An application where you can guess 
              between the numbers 1-50 and then the aplication tells 
              you if you are right or wrong</p>
            <h4 >Stack Used: JavaScript</h4>
            <a href="https://guess-dnumber.netlify.app/">Visit demo</a>
          </div>
        </div>

        <div class="box">
          <img src="./image/porfolio.PNG" alt="" />
          <div class="content">
            <h3>My Portfolio</h3>
            <p>This is my portfolio that tells basically everything about me, my goals,
                skillset and some of the work I have done as a Front End Software Engineer.</p>
            <h4 >Stack Used: React.js,</h4>
            <a href="https://myportfolio-flax-eight.vercel.app/">Visit demo</a>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Portfolio