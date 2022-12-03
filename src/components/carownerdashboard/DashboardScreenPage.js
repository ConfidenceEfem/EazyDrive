import React from 'react'
import DashboardScreen from './DashboardScreen'
import DashboardSideBar from './DashboardSideBar'
import DashHeader from './DashHeader'
import styled from "styled-components"

const DashboardScreenPage = () => {
  return (
    <Container>
    <DashHeader/>
    <Wrapper>
        <DashboardSideBar/>
        <DashboardScreen/>
    </Wrapper>
</Container>
  )
}

export default DashboardScreenPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`