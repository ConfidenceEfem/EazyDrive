import React from 'react'
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

const SignUpHeader = () => {


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
                <Div>Already have an account?</Div>
                <Button
                onClick={()=>{
                    navigate(`/signin-carowner`)
                }}
                >Sign In</Button>
            </RightItems>
        </Wrapper>
    </Container>
  )
}

export default SignUpHeader

const Button = styled.div`
margin-left: 5px;
color: brown;
cursor: pointer;
font-weight: 500;
/* transform: scale(0); */
transition: all 550ms;
:hover {
transform: scale(0.9);
}
`

const Div = styled.div``

const RightItems = styled.div`
display:flex;
align-items: center;
`

const Logo = styled.img`
/* width: 150px; */
/* background-color: red; */
cursor: pointer;
height: 90px;
object-fit: contain;
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
`