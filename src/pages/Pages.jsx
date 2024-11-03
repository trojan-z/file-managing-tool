import React from 'react'
import HomePage from './HomePage'
import About from './About'
import Policy from './Policy'
import {  Routes, Route, Link } from 'react-router-dom'


const Pages = () => {
  return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/policy" element={<Policy />}/>
        </Routes>

  )
}

export default Pages
