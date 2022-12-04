import React, { useState } from 'react'
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from 'axios'
import { ErrorFunction } from '../Error'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'

const KYCScreen = () => {

    const [imageLink, setImageLink] = useState("")
    const [image, setImage] = useState("")

    const [loading, setLoading] = useState(false)

    const uploadImage = (e) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImageLink(file)
        setImage(save)
    }

    const schema = yup.object().shape({
        address: yup.string().required("Please input address"),
        city: yup.string().required("Please input city"),
        telephone: yup.number().required("Input your contact"),
       nin: yup.string().required("Please input National ID") 
    })

    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)


    const {handleSubmit,register,formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const submit = handleSubmit(async (data)=>{

        try {
            setLoading(true)
        const {address,city,telephone,nin} = data

        const formData = new FormData()

        formData.append("City", city)
        formData.append("NationalId", nin)
        formData.append("telephone", telephone)
        formData.append("address", address)
        formData.append("carOwnerImage", imageLink)

        const config = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };

        const res = await axios.post(`/api/hirer/kyc/${currentUserId}`, formData, config)
        if(res){
            setLoading(false)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `KYC Completed Successfully`,
                showConfirmButton: false,
                timer: 2500,
              })
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
    })

  return (
    <Container>
       <Wrapper>
       <TitleAndSub>
            <Title>Customer Verification</Title>
            <Sub>
                This verification is mandatory for all car owners.
                 Without verifying your account you 
                would not be able to put<br/> your car up for hiring
            </Sub>
        </TitleAndSub>
        <ImageUpload>
            {
            image === ""?
            <ShowImage src="/images/avatar.png"/>
            : 
            <ShowImage src={image}/>
            }
            <input style={{display: "none"}} id="pix" type="file" onChange={uploadImage}/>
            <Upload htmlFor="pix">Upload Image</Upload>
        </ImageUpload>
        <DetailForm onSubmit={submit}>
            <AddressHolder>
                <OneItem>
                    <Label>Home Address:</Label>
                    <Input placeholder='23 Eze Street, Greengate Estate, Aroma...'
                    {...register("address")}
                    />
                    <Errors>{errors?.address?.message}</Errors>
                </OneItem>
                <OneItem1>
                    <Label>City:</Label>
                    <Input placeholder='Onitsha'
                    {...register("city")}
                    />
                    <Errors>{errors?.city?.message}</Errors>
                </OneItem1>
            </AddressHolder>
            <NinAndTelephone>
                <OneInput>
                    <Label>Telephone:</Label>
                    <Input placeholder='09122638832'
                    {...register("telephone")}
                    />
                    <Errors>{errors?.telephone?.message}</Errors>
                </OneInput>
                <OneInput1>
                    <Label>Nation Identity Number (NIN):</Label>
                    <Input placeholder='23421566574534' type="number"
                    {...register("nin")}
                    />
                    <Errors>{errors?.nin?.message}</Errors>
                </OneInput1>
            </NinAndTelephone>
            <ButtonHold>
                {loading === false?
                <Button type='submit'>Submit</Button>
                :
                <Button type='submit'>
                    <SyncLoader color="white" margin={4}size={8}/>
                </Button>}
            </ButtonHold>
        </DetailForm>
       </Wrapper>
    </Container>
  )
}

export default KYCScreen

const Errors = styled.div`
font-size: 10px;
color: red;
font-weight: bold;
margin-top: 4px;
font-family: poppins;
`

const Button = styled.button`
outline:none;
border: none;
width: 250px;
height: 45px;
background-color: orange;
font-family: poppins;
color: black;
border-radius: 5px;
margin-top: 30px;
cursor: pointer;
transition: all 650ms;
:hover{
    transform: scale(1.02);
}
`

const ButtonHold = styled.div`
display:flex;
justify-content: flex-end;
width: 780px;
/* margin-top: 30px; */
`
const OneInput1 = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
`

const OneInput = styled.div`
display:flex;
flex-direction: column;
margin-right: 50px;
align-items: flex-start;
`

const NinAndTelephone = styled.div`
margin: 40px 0;
display: flex;
align-items: center;
`

const Input = styled.input`
width: 350px;
height: 40px;
padding: 5px;
border: none;
outline: 2px solid black;
border-radius: 10px;
font-family: poppins;
font-size: 12px;
letter-spacing: 0.3px;
`

const Label = styled.div`
font-weight: 500;
font-size: 14px;
margin-bottom: 5px;
`

const OneItem1 = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
`
const OneItem = styled.div`
display:flex;
flex-direction: column;
margin-right: 50px;
align-items: flex-start;
`
const AddressHolder = styled.div`
display:flex;
align-items: center;
margin: 30px 0;
`
const DetailForm = styled.form`
width: 100%;;
/* background-color: red; */
`

const Upload = styled.label`
font-size: 14px;
color: gray;
cursor: pointer;
font-style: italic;
`

const ShowImage = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
margin-right: 30px;
`

const ImageUpload = styled.div`
display:flex;
align-items: center;
margin-bottom: 15px;
`

const Sub = styled.div`
font-size: 14px;
`

const Title = styled.div`
font-size: 18px;
font-weight: 600;
margin-bottom: 7px;
`

const TitleAndSub = styled.div`
margin-top: 20px;
margin-bottom: 30px;
`

const Wrapper = styled.div`
width: 80%;
display:flex;
flex-direction: column;
`

const Container = styled.div`
/* width: calc(100vw - 280px); */
height: auto;
display:flex;
background-color: #fafcff;
width: calc(100% - 280px);
justify-content: center;
/* flex: 1; */
`