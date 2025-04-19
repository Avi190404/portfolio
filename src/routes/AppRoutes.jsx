import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import About from '../pages/About'
import WorkExperience from '../pages/Work'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes