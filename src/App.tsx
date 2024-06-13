import './App.css'
import { useState } from 'react'

// Libs
import { Button } from './components/ui/button'
import { Route, Routes } from "react-router-dom"
import { Outlet } from 'react-router-dom'

// Navbar
import Navbar from './navbar'

function App() {

  return (
    <>
      <div className='w-full h-full'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )

}

export default App
