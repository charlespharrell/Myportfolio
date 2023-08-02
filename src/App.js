import About from "./Component/About";
import './App.css'
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import { useState } from "react";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import Skill from "./Component/Skill";
import { BrowserRouter as Router, } from 'react-router-dom';
import Theme from "./Component/Theme";
import {FaMoon} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa'
import Footer from "./Component/Footer";
import Hamburger from "./Component/Hamburger";
import {GiHamburgerMenu} from 'react-icons/gi'

import {AiOutlineClose} from 'react-icons/ai'
function App() {

  const [imgsrc, setimgsrc]=useState("./image/FB_IMG_1562194368478.jpg")
  const[icon, setIcon]=useState(<FaMoon className='FaTheme'/>)
  const[active, setactive]=useState(':root')
  const[isclicked, setisClicked]=useState(false)

  const[ham_icon, sethamicon]= useState(<GiHamburgerMenu className='hamburger'/>)
  
  const [header, setheader]= useState('header')
  const[ismenuclicked, setismenuclicked]=useState(false)

  

  const handleClick=(e)=>{
    e.preventDefault()
    setisClicked(!isclicked)
    if(!isclicked){
      setIcon(<FaSun className='FaTheme'/>)
      setactive('active')
      setimgsrc('./image/IMG_20191227_102349_825.jpg')
    }
    else{
      setIcon(<FaMoon className='FaTheme' />)
      setactive(':root')
      setimgsrc('./image/FB_IMG_1562194368478.jpg')
    }
    }


    const handleclickmenu=(e)=>{ 
      e.preventDefault()
      setismenuclicked(!ismenuclicked)
    if(!ismenuclicked){
      sethamicon(<AiOutlineClose className='hamburger'/>)
      setheader('header active')
    }
    else{
      sethamicon(<GiHamburgerMenu className='hamburger'/>)
      setheader('header')
    }
    }

   

  return (

    <Router>
    <div className="App">
      <body className={active}> 
      <Hamburger handleclickmenu={handleclickmenu} ham_icon={ham_icon} /> 
      <Header imgsrc={imgsrc} header={header} />
      <Theme  icon={icon} handleClick={handleClick}/>
      <Home />
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </body>
    </div>
    </Router>
  );
}

export default App;
