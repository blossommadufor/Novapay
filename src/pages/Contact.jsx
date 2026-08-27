import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import Redefine from '../components/Redefine'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
      <Faq/>
      <Redefine/>
      <Footer/>
    </div>
  )
}

export default Contact
