import React, { useState } from 'react'
import styled from "styled-components"
import HirerHeader from './HirerHeader'
import HirerSideBar from './HirerSideBar'
import HireCarScreen from './HireCarScreen'

const HireCarPage = () => {
    const [location, setLocation] = useState("")
  return (
    <Container>
    <HirerHeader location={location} setLocation={setLocation}/>
    <Wrapper>
        <HirerSideBar/>
        <HireCarScreen location={location}/>
    </Wrapper>
</Container>
  )
}

export default HireCarPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`