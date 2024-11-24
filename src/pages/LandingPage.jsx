import React from 'react'
import NavBar from '../components/NavBar'
import LandingPage1 from '../components/LandingPage1'
import LandingPage2 from '../components/LandingPage2'
import LandingPage3 from '../components/LandingPage3'

function LandingPage() {
  return (
    <div>
        <NavBar/>
        <LandingPage1/>
        <LandingPage2/>
        <LandingPage3/>
    </div>
  )
}

export default LandingPage