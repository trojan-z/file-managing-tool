import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pages from './pages/Pages'
import './App.css'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <div className='justify-center items-center p-0 lg:p-5'>
        <Navbar />
        <Pages />
       </div>
    </BrowserRouter>
    </>
  )
}

export default App