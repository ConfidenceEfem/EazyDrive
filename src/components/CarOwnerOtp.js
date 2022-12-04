import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import LandingHeader from './LandingHeader'
import { ErrorFunction } from './Error'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { addCurrentUser } from './Redux/EarliReducers'

const CarOwnerOtp = () => {

    const [loading, setLoading] = useState(false)

    const [num, setNum] = useState("")
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [num3, setNum3] = useState("")

    const navigate = useNavigate()

    const fullName = useSelector((state)=>state.persistedReducer.fullName)
    const email = useSelector((state)=>state.persistedReducer.email)
    const password = useSelector((state)=>state.persistedReducer.password)
  
    const dispatch = useDispatch()

    const inputRef = useRef(null);
    const [activeBox, setActiveBox] = useState(1);



    const verifyAccount = async () => {
        try {
            setLoading(true)
            const res = await axios.post("/api/verify", {
                email: email,
                password: password,
                fullName: fullName,
                otp: (num + num1 + num2 + num3)
            })
            if(res){
                console.log(res)
                setLoading(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Account Created Successfully`,
                    showConfirmButton: false,
                    timer: 2500,
                  }).then(() => {
                    dispatch(addCurrentUser(res?.data?.data))
                    navigate(`/dashboard-carowner/${res?.data?.data?.data?._id}`);
                  });
            }
        } catch (error) {
            setLoading(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${ErrorFunction(error)}`,
                showConfirmButton: false,
                timer: 2500,
              })
        }
    }
  
   
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
                <FormItems>
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
                        {loading === false? 
                        <CreateAccount onClick={verifyAccount}>Verify Account</CreateAccount>
                        :
                        <CreateAccount>
                            <SyncLoader color="white" margin={4}size={8}/>
                        </CreateAccount>}
                        <SubText>By Clicking "Create Account", I agree to EazyDrive Terms of Service</SubText>
                    </ButtonHolders>
                </FormItems>
                <FormImage src={`/images/acct.svg`}/>
            </FormHolder>
        </BodyItems>
    </Container>
  )
}

export default CarOwnerOtp

const SubText = styled.div`
font-size: 12px;
color: gray;
`

const CreateAccount = styled.div`
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

const FormItems = styled.div`
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