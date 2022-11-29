import React, { useState } from 'react'
import styled from "styled-components"
import SignUpHeader from './SignUpHeader'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useNavigate} from "react-router-dom"

const SignUp = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const schema = yup.object().shape({
        fullName: yup.string().required("This field is required"),
        email: yup.string().email().required("Please input your email"),
        password: yup.string().required("Please input your password")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)})

    const submit = handleSubmit((data)=>{
        console.log(data)
    })




  return (
    <Container>
        <SignUpHeader/>
        <BodyItems>
            <ContentItems>
                <Caption>Create a Free Account as A Car Owner</Caption>
                <SubCap>
                    <Div>Already have an account?</Div>
                    <SignUpButton
                    onClick={()=>{
                        navigate(`/signin-carowner`)
                    }}
                    >Sign In as a Car Owner</SignUpButton>
                </SubCap>
            </ContentItems>
            <FormHolder>
                <FormItems onSubmit={submit}>
                    <InputHolders>
                    <Input placeholder="Your Full Name" {...register("fullName")}/>
                    <Input placeholder="Your Email" {...register("email")}/>
                    <Input placeholder="Your Password" type={"password"} {...register("password")}/>
                    </InputHolders>
                    <ButtonHolders>
                        <CreateAccount type='submit'>Create Account</CreateAccount>
                        <SubText>By Clicking "Create Account", I agree to EazyDrive Terms of Service</SubText>
                    </ButtonHolders>
                </FormItems>
                <FormImage src={`/images/signupimage1.svg`}/>
            </FormHolder>
        </BodyItems>
    </Container>
  )
}

export default SignUp

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
width: 100%;
height: 40px;
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
flex-direction: column;
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