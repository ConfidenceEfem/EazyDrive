import React from 'react'
import styled from 'styled-components'
import HeroPage from './HeroPage'
import LandingHeader from './LandingHeader'

const LandingPage = () => {
  return (
    <Container>
        <LandingHeader/>
        <HeroPage/>
    </Container>
  )
}

export default LandingPage

const Container = styled.div``