import React from 'react'
import styled from "styled-components"
import HirerHeader from './HirerHeader'
import HirerSideBar from './HirerSideBar'
import BookingUpdateScreen from './BookingUpdateScreen'

const HirerBookUpdatePage = () => {
  return (
    <Container>
    <HirerHeader/>
    <Wrapper>
        <HirerSideBar/>
        <BookingUpdateScreen/>
    </Wrapper>
</Container>
  )
}

export default HirerBookUpdatePage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`