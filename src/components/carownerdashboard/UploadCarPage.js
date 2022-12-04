import React from 'react'
import DashboardSideBar from './DashboardSideBar'
import DashHeader from './DashHeader'
import styled from "styled-components"
import UploadCarScreen from './UploadCarScreen'

const UploadCarPage = () => {
  return (
    <Container>
    <DashHeader/>
    <Wrapper>
        <DashboardSideBar/>
        <UploadCarScreen/>
    </Wrapper>
</Container>
  )
}

export default UploadCarPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`