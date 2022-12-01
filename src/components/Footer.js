import React from 'react'
import styled from "styled-components"
import {AiOutlineTwitter,AiFillFacebook,AiFillInstagram,AiFillMail} from "react-icons/ai"

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <LeftItems>
                <Navs>Contact</Navs>
                <Navs>Help</Navs>
                <Navs>Hire</Navs>
                <Navs>Rent</Navs>
            </LeftItems>
            <RightItems>
                <Circle>
                    <Icon>
                        <AiOutlineTwitter/>
                    </Icon>
                </Circle>
                <Circle>
                    <Icon>
                        <AiFillFacebook/>
                    </Icon>
                </Circle>
                <Circle>
                    <Icon>
                        <AiFillInstagram/>
                    </Icon>
                </Circle>
                <Circle>
                    <Icon>
                        <AiFillMail/>
                    </Icon>
                </Circle>
            </RightItems>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Icon = styled.div`
font-size: 20px;
display:flex;
justify-content: center;
align-items: center;
`

const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: white;
color: black;
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 550ms;
margin: 0 15px;
:hover{
    background-color: gray;
}
`

const Navs = styled.div`
font-size: 14px;
color: white;
margin: 0 15px;
cursor: pointer;

cursor: pointer;
:hover{
    color: gray;
}
`

const RightItems = styled.div`
display:flex;
align-items: center;
`

const LeftItems = styled.div`
display: flex;
align-items: center;
`

const Wrapper = styled.div`
width: 80%;
display:flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
`