import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Header from './Components/Header/Header'
import Hero from './Components/Hero'
import Experience from './Components/Experience'
import Testimonial from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer'
import BackTopBtn from './Components/BackTopbtn'
import SideIcons from './Components/SideIcons'

const App = () => {
  return (
    <div className='bg-white absolute w-full'>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <BackTopBtn/>
      <SideIcons/>
      
    </div>
  )
}

export default App