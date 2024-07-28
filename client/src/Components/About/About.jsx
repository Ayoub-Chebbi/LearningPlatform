import React from 'react'
import './About.css'
import about from '../../images/about-right_section.png'
const About = () => {
  return (
    <div>
        <div className='container about-container'>
            <div className='about-header_text'>
                <h1>What is <span>Skilline?</span></h1>
                <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>
            <div className='row about-section'>
                <div className='col-xl-6 col-12 about-left_section'>
                    <h1>Everything you can do in a physical classroom, <span>you can do with Skilline</span></h1>
                    <p>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                </div>
                <div className='col-xl-6 col-12 about-right_section'>
                    <img src={about} alt='about' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About