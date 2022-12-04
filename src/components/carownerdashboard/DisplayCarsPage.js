import React from 'react'
import DashboardSideBar from './DashboardSideBar'
import DashHeader from './DashHeader'
import styled from "styled-components"
import DisplayCarsScreen from './DisplayCarsScreen'

const DisplayCarsPage = () => {
  return (
    <Container>
    <DashHeader/>
    <Wrapper>
        <DashboardSideBar/>
        <DisplayCarsScreen/>
    </Wrapper>
</Container>
  )
}

export default DisplayCarsPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`