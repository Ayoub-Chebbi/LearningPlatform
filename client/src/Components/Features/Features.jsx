import React from 'react'
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'
import fourth from '../../images/4.png'
import fifth from '../../images/5.png'
import ff from '../../images/11.png'
import ss from '../../images/22.png'
import tt from '../../images/33.png'
import './Features.css'
const Features = () => {
  return (
    <div>
        <div className='container features-section'>
            <h1>Our <span>Features</span></h1>
            <p>This very extraordinary feature, can make learning activities more efficient</p>
            <div className='row features-wrapper'>
                <div className='col-xl-6 col-12 features-left_section'>
                    <img width={'650px'} src={first} alt='first' />
                </div>
                <div className='col-xl-6 col-12 features-right_section'>
                    <h2>Get your online store in minutes</h2>
                    <p>With our easy-to-use drag and drop builder, you can have your online store up and running in minutes.</p>
                </div>
                <div className='col-xl-6 col-12 features-left_section'>
                <h2>Get your online store in minutes</h2>
                <p>With our easy-to-use drag and drop builder, you can have your online store up and running in minutes.</p>
                </div>
                <div className='col-xl-6 col-12 features-right_section'>
                
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Features