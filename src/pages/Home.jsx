import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Features from '../components/Features'
import Workflow from '../components/Workflow'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Blog from '../components/Blog'
import Platform from '../components/Platform'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <Services/>
      <Features/>
      <Workflow/>
      <Testimonials/>
      <Pricing/>
      <Blog/>
      <Platform/>
      <Footer/>
    </div>
  )
}

export default Home
