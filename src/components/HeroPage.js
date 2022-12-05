import React, { useState } from 'react'
import styled from "styled-components"
import {GoLocation} from "react-icons/go"
import ModalPage from './ModalPage'

const HeroPage = () => {

    const [location, setLocation] = useState("")

    const [modal, setModal] = useState(false)

   

  return (
    <MainContainer>
        {modal? 
        
        <ModalPage toggle={modal} setToggle={setModal} location={location}/>
        :null}
        <Container>
        <ImageAndContent>
            <Image src={"/images/hero.jpg"}/>
            <Contents>
                <Caption>
                    Need a Car? Book a car near you
                </Caption>
                <InputHolder>
                    <InputandCircle>
                    <Circle>
                        <GoLocation/>
                    </Circle>
                    <Input placeholder="Pick up City in Anambra"
                    value={location}
                    onChange={(e)=>{
                        setLocation(e.target.value)
                    }}
                    />
                    </InputandCircle>
                    {location === ""?
                    <Button
                    style={{
                        backgroundColor: "lightgray",
                        cursor:"default"
                    }}
                    >HIRE A CAR</Button>: <Button
                    onClick={()=>{
                        setModal(!modal)
                    }}
                    >HIRE A CAR</Button>}
                    
                </InputHolder>
            </Contents>
        </ImageAndContent>
    </Container>
    </MainContainer>
    
  )
}

export default HeroPage

const Button = styled.div`
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
border-radius: 3px;
:hover {
transform: scale(0.9);
}
`

const Input = styled.input`
outline: none;
border: none;
height: 100%;
width: 80%;
text-align: right;
margin-right: 15px;
font-family: poppins;
letter-spacing: 0.3px;
::placeholder{
    font-family: poppins;
}
`
const Circle = styled.div`
color: yellow;
font-size: 25px;
margin-left: 20px;
flex: 1;
`
const InputandCircle = styled.div`
display: flex;
align-items: center;
width: 650px;
background-color: white;
height: 35px;
padding: 10px 5px;
border-radius: 30px;
margin-bottom: 20px;
`

const InputHolder = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

const Caption = styled.div`
font-size: 30px;
font-weight: bold;
margin-bottom: 40px;
`

const Contents = styled.div`
background-color: rgb(0,0,0,0.6);
width: 100%;
height: 100%;
position:absolute;
display:flex;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;
bottom: 0;
`

const Image = styled.img`
display:flex;
/* height:98%; */
width: 100%;
object-fit: cover;
`

const ImageAndContent = styled.div`
width: 100%;
display:flex;
height: 100%;
position: relative;
bottom: 0;

/* margin-top: 20px; */
`


const Container = styled.div`
width: 100%;
height: calc(100vh - 90px);
display:flex;
`
const MainContainer = styled.div`
width: 100%;
height: calc(100vh - 90px);
display:flex;
position: relative;
`