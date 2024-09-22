import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
   <div className="min-h-screen bg-gradient-to-b from-pink-100 to-orange-100">





<Navbar />

<Manager />



<Footer />
</div>
    
    </>
  )
}

export default App
