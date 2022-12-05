import React from 'react'
import styled from "styled-components"
import HirerHeader from './HirerHeader'
import HirerSideBar from './HirerSideBar'
import HireDetailScreen from './HireDetailScreen'
import { useParams } from 'react-router-dom'

const HireDetailPage = () => {
    const {id} = useParams()
  return (
    <Container>
    <HirerHeader/>
    <Wrapper>
        <HirerSideBar/>
        <HireDetailScreen id={id}/>
    </Wrapper>
</Container>
  )
}

export default HireDetailPage

const Wrapper = styled.div`
display:flex;

`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
/* align-items: center; */
`