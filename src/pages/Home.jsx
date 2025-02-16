import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectsSection from '../components/Projects'
import ContactSection from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default Home