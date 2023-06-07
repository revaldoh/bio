 import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './index.css'
import Social from './components/Social'
import About from './components/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar/>
   <Home />
   <Social/>
   <About/>
  </React.StrictMode>
)
