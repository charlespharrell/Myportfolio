import React from 'react'
import './About.css'

function About() {
  return (

      <section class="about" id="about">
      <h1 class="heading"><span>about</span> me</h1>

      <div class="row">
        <div class="box-container">
          <div class="box">
            <h3>1+</h3>
            <p>year of experience</p>
          </div>
          <div class="box">
            <h3>20+</h3>
            <p>projects</p>
          </div>
          <div class="box">
            <h3>100+</h3>
            <p>working hours</p>
          </div>
          <div class="box">
            <h3>02+</h3>
            <p>Companies worked</p>
          </div>
        </div>

        <div class="content">
          <h3>my name is <span>Charles Udenwoke</span></h3>
          <p>
          I Am A Frontend Software Engineer With A Vast Array Of Knowledge In languages 
            And Frameworks Used In Building, Designing
             And Making Interractive
            And Reponsive, Web Application Programs. 
            My Objective Is Simply To Be The Best Software Engineer That I Can Be And To Contribute
             To The Technology Industry All That I Know Can Do. 
             I Am Dedicated To Perfecting My Craft By
             Learning From More Seasoned Engineers, Remaining Humble, And Continuously Making Strides
              To Learn All That I Can About Development. 
          </p>
          <a href="#" class="btnn">contact me</a>
        </div>

      </div>

    </section>

  )
}

export default About