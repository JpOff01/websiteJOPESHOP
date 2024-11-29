import React from 'react'
import NavBar from '../components/NavBar'
import LandingPage1 from '../components/LandingPage1'
import LandingPage2 from '../components/LandingPage2'
import LandingPage3 from '../components/LandingPage3'
import LandingPageCard1 from '../components/LandingPageCard1'
import ButtonFinalLandingPage from '../components/ButtonFinalLandingPage'

function LandingPage() {
  return (
    <div  class="min-h-screen bg-gradient-radial from-GrayBackground to-BlackBackground">
        <NavBar/>
        <LandingPage1/>
        <LandingPage2/>
        <LandingPage3/>
        <LandingPageCard1/>
        <ButtonFinalLandingPage/>
    </div>
  )
}

export default LandingPage