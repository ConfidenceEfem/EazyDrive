import React from 'react'
import DashboardSideBar from './DashboardSideBar'
import DashHeader from './DashHeader'
import styled from "styled-components"
import KYCScreen from './KYCScreen'

const KYCPage = () => {
  return (
    <Container>
    <DashHeader/>
    <Wrapper>
        <DashboardSideBar/>
        <KYCScreen/>
    </Wrapper>
</Container>
  )
}

export default KYCPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`