import React from 'react'
import DashboardSideBar from './DashboardSideBar'
import DashHeader from './DashHeader'
import styled from "styled-components"
import HiringUpdateScreen from './HiringUpdateScreen'

const HiringUpdatePage = () => {
  return (
    <Container>
    <DashHeader/>
    <Wrapper>
        <DashboardSideBar/>
        <HiringUpdateScreen/>
    </Wrapper>
</Container>
  )
}

export default HiringUpdatePage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`