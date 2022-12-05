import React from 'react'
import styled from "styled-components"
import HirerHeader from './HirerHeader'
import HirerSideBar from './HirerSideBar'
import HirerKYCScreen from './HirerKYCScreen'

const HirerKYCPage = () => {
  return (
    <Container>
    <HirerHeader/>
    <Wrapper>
        <HirerSideBar/>
        <HirerKYCScreen/>
    </Wrapper>
</Container>
  )
}

export default HirerKYCPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`