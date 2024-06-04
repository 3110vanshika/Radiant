import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <div className='h-screen bg-header bg-cover bg-center'>
       <Navbar />
       <Hero />
    </div>
  )
}

export default Header
