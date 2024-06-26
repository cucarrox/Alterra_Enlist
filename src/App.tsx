import './App.css'
import { useState } from 'react'

// Libs
import { Button } from './components/ui/button'
import { Route, Routes } from "react-router-dom"
import { Outlet } from 'react-router-dom'

// Navbar
import Navbar from './navbar'
import Footer from './footer'

function App() {

  return (
    <>
      <div className='w-full h-full'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )

}

export default App
