import React from 'react'
import styled from "styled-components"
import {GoLocation} from "react-icons/go"

const Card = ({props}) => {
  return (
    <Container>
        <Image src={props?.carImage}/>
        <Model>{props?.carModel}</Model>
        <Location>
            <Icon>
                <GoLocation/>
            </Icon>
            <City>{props?.city}</City>
        </Location>
            <Price>N{props?.pricePerDay}</Price>
            <Sub>per day</Sub>
            <Button>Hire Now</Button>
    </Container>
  )
}

export default Card

const Button = styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: center;
background-color: orange;
color: white;
font-weight: 500;
height: 45px;
font-size: 14px;
letter-spacing: 0.3px;
border-radius: 5px;

`
const Sub = styled.div`
font-size: 11px;
margin-bottom: 30px;
`
const Price = styled.div`
font-size: 25px;
`
const City = styled.div`
color: orange;
font-weight: bold;

`

const Icon = styled.div`
margin-right: 5px;
`

const Location = styled.div`
display:flex;
align-items: center;
margin-bottom: 25px;
`

const Model = styled.div`
font-weight: bold;
margin-bottom: 20px;
`

const Image = styled.img`
width: 100%;
height: 180px;
object-fit: contain;
margin-bottom: 5px;
`

const Container = styled.div`
width: 300px;
height: 415px;
/* background-color: red; */
/* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
display: flex;

flex-direction: column;
align-items: center;
cursor: pointer;
transform: scale(1);
transition: all 550ms;
margin: 15px;
:hover{
    transform: scale(1.02);
}
`