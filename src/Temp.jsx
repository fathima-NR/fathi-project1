import React from 'react'
import Body from './component/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footerpage from './component/Footerpage';
import About from "./component/About"
import Contact from "./component/Contact"

function Temp() {
  return (
    <>
  <BrowserRouter>

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
    </Routes>
 
      </BrowserRouter>
      <Footerpage/>
     </>
  )
}

export default Temp