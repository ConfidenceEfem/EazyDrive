import React from 'react'
import styled from 'styled-components'
import AboutPage from './AboutPage'
import Footer from './Footer'
import HeroPage from './HeroPage'
import LandingHeader from './LandingHeader'

const LandingPage = () => {
  return (
    <Container>
        <LandingHeader/>
        <HeroPage/>
        <AboutPage/>
        <Footer/>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
/* position: relative; */
`