import React from 'react'
import styled from "styled-components"
import HirerHeader from './HirerHeader'
import HirerDashScreen from './HirerDashScreen'
import HirerSideBar from './HirerSideBar'

const HirerDashPage = () => {
  return (
    <Container>
    <HirerHeader/>
    <Wrapper>
        <HirerSideBar/>
        <HirerDashScreen/>
    </Wrapper>
</Container>
  )
}

export default HirerDashPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`