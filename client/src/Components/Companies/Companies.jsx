import React from 'react'
import google from '../../images/google.png'
import airbnb from '../../images/airbnb.png'
import facebook from '../../images/facebook.png'
import grab from '../../images/grab.png'
import amazon from '../../images/amazon.png'
import netflix from '../../images/netflix.png'
import './Companies.css'
const Companies = () => {
  return (
    <div>
        <div className='container'>
            <h1>Trusted by 5,000+ Companies Worldwide</h1>
            <div className='row companies-wrapper'>
                <div className='col-xl-2 col-12'>

                </div>
                <div className='col-xl-2 col-12'>
                    <img src={google} alt='google' />
                </div>
                <div className='col-xl-2 col-12'>
                    <img src={airbnb} alt='airbnb' />
                </div>
                <div className='col-xl-2 col-12'>
                    <img src={facebook} alt='facebook' />
                </div>
                <div className='col-xl-2 col-12'>
                    <img src={grab} alt="grab" />
                </div>
                <div className='col-xl-2 col-12'>
                    <img src={amazon} alt='amazon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Companies