import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RouteConfig from './config/routeConfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <RouteConfig />
      <Footer />
    </BrowserRouter>
  )
}

export default App
