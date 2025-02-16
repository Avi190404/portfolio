import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutPage from '../pages/About'
import Projects from '../pages/Projects'
import ContactPage from '../pages/Contact'

const routeConfig = () => {
  return (
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default routeConfig