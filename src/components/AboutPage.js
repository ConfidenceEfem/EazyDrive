import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Card from './Card'

const AboutPage = () => {

  const [data, setData] = useState([])

  const getAllCar = async () => {
    const res = await axios.get(`/api/allCar`)
    // console.log(res?.data?.data)
    setData(res?.data?.data)
  }

  useEffect(()=>{
getAllCar()
  })

  return (
    <Container>
        <Wrapper>
            <Caption>Car Rental In all Local Goverment areas in Anambra</Caption>
            <CardHolder>
              {data?.map((props)=>(
                <Card props={props}/>
              ))}
                
                
            </CardHolder>
        </Wrapper>
    </Container>
  )
}

export default AboutPage

const CardHolder = styled.div`
margin-top: 50px;
display: flex;
flex-wrap: wrap;
`

const Caption = styled.div`
margin-top: 30px;
font-size: 23px;
font-weight: 500;
`

const Wrapper = styled.div`
width: 90%;
display:flex;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
width: 100%;
/* height: 70vh; */
display:flex;
margin-bottom: 50px;
justify-content: center;
/* align-items: center; */
`