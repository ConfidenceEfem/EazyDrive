import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const LandingHeader = () => {

    const navigate = useNavigate()

  return (
    <Container>
    <Wrapper>
        <Logo src={`/images/eazylogo.png`}
        onClick={()=>{
            navigate(`/`)
        }}
        />
        <RightItems>
            <Div
            onClick={()=>{
                navigate(`/signin-hirer`)
            }}
            >Hire a Car</Div>
            <Button
            onClick={()=>{
                navigate(`/signin-carowner`)
            }}
            >Register your Car</Button>
        </RightItems>
    </Wrapper>
</Container>
  )
}

export default LandingHeader

const Button = styled.div`
margin-left: 20px;
color: black;
cursor: pointer;
width: 200px;
display:flex;
justify-content: center;
align-items: center;
/* border: 2px solid yellow; */
background-color: yellow;
height: 50px;
font-weight: 500;
font-size: 14px;
transition: all 550ms;
:hover {
transform: scale(0.9);
}
`

const Div = styled.div`
cursor: pointer;
`

const RightItems = styled.div`
display:flex;
align-items: center;
`

const Logo = styled.img`
/* width: 150px; */
/* background-color: red; */
height: 90px;
object-fit: contain;
cursor: pointer;
`

const Wrapper = styled.div`
width: 90%;
display:flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
height: 90px;
display:flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
position: sticky;
/* margin-bottom: 50px; */
`