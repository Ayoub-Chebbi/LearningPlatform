import React from 'react'
import NavBar from '../navbar/NavBar'
import Header from '../Header/Header'
import './MainPage.css'
import Companies from '../Companies/Companies'
import About from '../About/About'
import Features from '../Features/Features'
const MainPage = () => {
  return (
    <div>
      <div className='header-section'>
      <NavBar />
      <Header />
      </div>
      <div className='web-content'>
      <Companies />
      <About />
      <Features />
      </div>
      
    </div>
  )
}

export default MainPage