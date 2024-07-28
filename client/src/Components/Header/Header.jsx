import React from 'react'
import headerpic from '../../images/header-pic.png'
import './Header.css'

const Header = () => {
  return (
    <div>
        <div className='container '>
            <div className='row header-main_section'>
                <div className='col-xl-6 col-12 header-left_section'>
                    <h1>Studying <span>Online is now much easier</span></h1>
                    <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
                    <button>Join for free</button>
                </div>
                <div className='col-xl-6 col-12 header-right_section'>
                    <img src={headerpic} alt='headerpic' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header