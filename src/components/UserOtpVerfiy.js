import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useNavigate} from "react-router-dom"
import LandingHeader from './LandingHeader'

const UserOtpVerify = () => {

    // const [loading, setLoading] = useState(false)

    const [num, setNum] = useState("")
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [num3, setNum3] = useState("")

    const navigate = useNavigate()

    const schema = yup.object().shape({
        fullName: yup.string().required("This field is required"),
        email: yup.string().email().required("Please input your email"),
        password: yup.string().required("Please input your password")
    })

    const { handleSubmit} = useForm({resolver: yupResolver(schema)})

    const submit = handleSubmit((data)=>{
        console.log(data)
    })


    const inputRef = useRef(null);
    const [activeBox, setActiveBox] = useState(1);
  
   
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeBox]);


  return (
    <Container>
        <LandingHeader/>
        <BodyItems>
            <ContentItems>
                <Caption>Verify your Account</Caption>
                <SubCap>
                    <Div>Already have an account?</Div>
                    <SignUpButton
                    onClick={()=>{
                        navigate(`/signin-hirer`)
                    }}
                    >Sign In to Hire a Car</SignUpButton>
                </SubCap>
            </ContentItems>
            <FormHolder>
                <FormItems onSubmit={submit}>
                    <InputHolders>
                    <Input
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
                if (e.target.value.length === 1) {
                  setActiveBox(2);
                } else if (e.target.value.length === 0) {
                  setActiveBox(2);
                }
              }}
              maxLength="1"
              ref={activeBox === 1 ? inputRef : null}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setActiveBox(1);
                } else if (e.target.value.length === 1) {
                  setActiveBox(2);
                }
              }}
            />
            <Input
              value={num1}
              onChange={(e) => {
                setNum1(e.target.value);
                if (e.target.value.length === 1) {
                  setActiveBox(3);
                } else if (e.target.value.length === 0) {
                  setActiveBox(2);
                }
              }}
              maxLength="1"
              ref={activeBox === 2 ? inputRef : null}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setActiveBox(1);
                } else if (e.target.value.length === 1) {
                  setActiveBox(3);
                }
              }}
            />
            <Input
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
                if (e.target.value.length === 1) {
                  setActiveBox(4);
                } else if (e.target.value.length === 0) {
                  setActiveBox(3);
                }
              }}
              maxLength="1"
              ref={activeBox === 3 ? inputRef : null}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setActiveBox(2);
                } else if (e.target.value.length === 1) {
                  setActiveBox(4);
                }
              }}
            />
                 <Input
              value={num3}
              onChange={(e) => {
                setNum3(e.target.value);
                if (e.target.value.length === 1) {
                  setActiveBox(5);
                } else if (e.target.value.length === 0) {
                  setActiveBox(4);
                }
              }}
              maxLength="1"
              ref={activeBox === 4 ? inputRef : null}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setActiveBox(3);
                } else if (e.target.value.length === 1) {
                  setActiveBox(5);
                }
              }}
            />       
                       
                    </InputHolders>
                    <ButtonHolders>
                        <CreateAccount type='submit'>Verify Account</CreateAccount>
                        <SubText>By Clicking "Create Account", I agree to EazyDrive Terms of Service</SubText>
                    </ButtonHolders>
                </FormItems>
                <FormImage src={`/images/acct.svg`}/>
            </FormHolder>
        </BodyItems>
    </Container>
  )
}

export default UserOtpVerify

const SubText = styled.div`
font-size: 12px;
color: gray;
`

const CreateAccount = styled.button`
font-size: 13px;
font-weight: 600;
color: white;
font-family: poppins;
margin-bottom: 15px;
outline: none;
border:none;
display:flex;
justify-content: center;
align-items: center;
width: 160px;
height: 50px;
border-radius: 30px;
background-color: gold;
letter-spacing: 0.3px;
cursor: pointer;
transform: scale(1);
transition: all 550ms;
:hover{
    transform: scale(1.02);
}

`
const FormImage = styled.img`
width: 500px;
height: 400px;
`

const ButtonHolders = styled.div`
display:flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 50px;
`

const Input = styled.input`
width: 50px;
height: 50px;
display:flex;
justify-content: center;
text-align: center;
align-items: center;
font-size: 20px;
font-weight: bold;
background-color: white;
border: 2px solid yellow;
padding: 5px;
outline: none;
border-radius: 0 5px;
margin: 15px;
::placeholder{
    font-size: 13px;
    font-weight: bold;
}
:focus{
   outline: 2px solid gold; 
}
`

const InputHolders = styled.div`
width: 400px;
display:flex;
flex-direction: row;
`

const FormItems = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 150px;
`

const FormHolder = styled.div`
width: 90%;
display:flex;
justify-content: center;
align-items: center;
/* margin-top: 30px; */
`

const SignUpButton = styled.div`
font-weight: bold;
color: brown;
font-size: 14px;
margin-left: 8px;
cursor: pointer;
transform: scale(1);
transition: all 550ms;
:hover{
    transform: scale(1.02);
}
`
const Div = styled.div`
color: rgb(212,175,55,0.8);
font-size: 15px;
`

const SubCap = styled.div`
display:flex;
align-items: center;

`

const Caption = styled.div`
font-size: 25px;
font-weight: 600;
margin-bottom: 15px;
color: yellow;

`

const ContentItems = styled.div`
margin: 50px 0;
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
`

const BodyItems = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
background-color: #fafcff;
`