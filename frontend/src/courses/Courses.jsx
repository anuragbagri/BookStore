import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Course from '../components/Course'

const Courses = () => {
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
        <Course />
    </div>
    <Footer/>
    </>
  )
}

export default Courses