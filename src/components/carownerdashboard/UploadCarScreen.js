import React, { useState } from 'react'
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ErrorFunction } from '../Error'
import Swal from 'sweetalert2'
import { SyncLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const UploadCarScreen = () => {

    const [driverAvailable, setDriverAvailable] = useState(false)
    const [priceperhrWithDr, setPriceperHrWithDr] = useState(0)
    const [priceperdayWithDr, setPriceperdayWithDr] = useState(0)

    const [imageLink, setImageLink] = useState("")
    const [image, setImage] = useState("")

    const [loading, setLoading] = useState(false)

    const uploadImage = (e) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImageLink(file)
        setImage(save)
    }

    const navigate = useNavigate()

    const schema = yup.object().shape({
        carBrand: yup.string().required("Please input car brand"),
        carModel: yup.string().required("Please input car model"),
        city: yup.string().required("Please input city"),
        carPlateNumber: yup.string().required("Input your plate number"),
       pricePerHr: yup.number().required("Please input price/hr") ,
       pricePerDay: yup.number().required("Please input price/day") ,
       pickUpLocation: yup.string().required("Please input location") ,
    })

    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    const {handleSubmit,register,
        // formState: {errors}
    } = useForm({resolver: yupResolver(schema)})

    const submit = handleSubmit(async (data)=>{
        try {
            setLoading(true)
            const {
                carModel,
                carBrand,
                carPlateNumber,
                pricePerHr,
                pricePerDay,
                pickUpLocation,
                city,
            } = data
    
            const formData = new FormData()
    
            formData.append("city", city)
            formData.append("carModel", carModel)
            formData.append("carBrand", carBrand)
            formData.append("carPlateNumber", carPlateNumber)
            formData.append("pricePerHr", pricePerHr)
            formData.append("pricePerDay", pricePerDay)
            formData.append("pickUpLocation", pickUpLocation)
            formData.append("priceForDriverPerHr", priceperhrWithDr)
            formData.append("priceForDriverPerDay", priceperdayWithDr)
            formData.append("driverAvailable", driverAvailable)
            formData.append("carImage", imageLink)
    
            const config = {
                headers: {
                  "content-type": "multipart/form-data",
                },
              };
            const res = await axios.post(`/api/upload/car/${currentUserId}`, formData, config)

            if(res){
                setLoading(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Car Uploaded Successfully`,
                    showConfirmButton: false,
                    timer: 2500,
                  }).then(() => {
                    navigate(`/uploadcar-carowner`);
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
    })

  return (
    <Container>
        <Wrapper>
           <HeadHolder>
           <HeadTitle>Upload Car</HeadTitle>
            <Sub>If you haven't completed the KYC Verification you won't be able to upload your cars</Sub>
           </HeadHolder>
           <ImageHolder>
            {
                image === ""? 
                 <DisplayImage/> : <DisplayImage src={image}/> 
            }
           
            <Upload htmlFor='pix'>Upload Car</Upload>
            <input onChange={uploadImage} id="pix" style={{display: "none"}} type="file"/>
           </ImageHolder>
           <InputForm onSubmit={submit}>
           <FirstLayer>
            <OneItem>
                <Label>Car Brand</Label>
                <Input placeholder="Camery "
                {...register("carBrand")}
                />
            </OneItem>
            <OneItem>
                <Label>Car Model</Label>
                <Input placeholder="Camery BMW 22"
                {...register("carModel")}
                />
            </OneItem>
            <OneItem>
                <Label>Car Plate Number</Label>
                <Input placeholder="NG39CD93"
                {...register("carPlateNumber")}
                />
            </OneItem>
           </FirstLayer>
           <ScondLayer>
            <OneItem>
                <Label>City(Which City is the Car in Anambra?)</Label>
                <Input placeholder="Onitsha"
                {...register("city")}
                />
            </OneItem>
            <OneItem>
                <Label>Price/hr (N)</Label>
                <Input placeholder="1000" type={"number"}
                {...register("pricePerHr")}
                />
            </OneItem>
            <OneItem>
                <Label>Price/day</Label>
                <Input placeholder="7000" type={"number"}
                 {...register("pricePerDay")}
                />
            </OneItem>
           </ScondLayer>
           <ThirdLayer>
           <OneItem>
                <Label>Pick up Location (Where should a hirer meet you to pick up car?)</Label>
                <Input1 placeholder="NNPC Fuel Station, along Asaba-Onitsha Road, Onitsha, Anambra"
                 {...register("pickUpLocation")}
                />
            </OneItem>
            <DriverCheck>
                <input type={"checkbox"}
                value={driverAvailable}
                onClick={()=>{
                    setDriverAvailable(!driverAvailable)
                }}
                />
                <Question>Are you available for Driving?</Question>
            </DriverCheck>
           </ThirdLayer>
           {
            driverAvailable === true? 
             <FourthLayer>
            <Holder>
                 <OneItem>
                <Label>Price/hr with Driver (N)</Label>
                <Input2 placeholder="15000" type={"number"} defaultValue={0}
                value={priceperhrWithDr}
                onChange={(e)=>{
                    setPriceperHrWithDr(e.target.value)
                }}
                />
            </OneItem>
                 <OneItem>
                <Label>Price/day with Driver (N)</Label>
                <Input3 placeholder="20000" type={"number"} defaultValue={0}
                 value={priceperdayWithDr}
                 onChange={(e)=>{
                     setPriceperdayWithDr(e.target.value)
                 }}
                />
            </OneItem>
            </Holder>
           </FourthLayer>
           : null
           }
          
           <ButtonHold>
            {
                loading === false? 
            
            <Button type='submit'>Upload Car</Button>
            :
            <Button type='submit'>
             <SyncLoader color="white" margin={4}size={8}/>
            </Button>}
           </ButtonHold>
           </InputForm>
        </Wrapper>
    </Container>
  )
}

export default UploadCarScreen

// const Errors = styled.div`
// font-size: 10px;
// color: red;
// font-weight: bold;
// margin-top: 4px;
// font-family: poppins;
// `

const Button = styled.button`
outline:none;
border: none;
width: 250px;
height: 45px;
background-color: orange;
font-family: poppins;
color: black;
border-radius: 5px;
cursor: pointer;
transition: all 650ms;
:hover{
    transform: scale(1.02);
}
`

const ButtonHold = styled.div`
display:flex;
justify-content: flex-end;
width: 100%;
/* width: 780px; */
/* margin-top: 30px; */
`

const Holder = styled.div`
display:flex;
`
const DriverCheck = styled.div`
display:flex;
align-items: center;
margin-left: 40px;
`
const FourthLayer = styled.div`
width: 100%;
display:flex;
/* justify-content: space-between; */
align-items: center;
margin-top: 20px;
`
const ThirdLayer = styled.div`
width: 100%;
display:flex;
/* justify-content: space-between; */
align-items: center;
/* margin: 20px 0; */
`

const ScondLayer = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
margin: 20px 0;
`

const FirstLayer = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
`

const Input3 = styled.input`
width: 250px;
height: 35px;
padding: 5px;
border: none;
outline: 2px solid black;
border-radius: 10px;
font-family: poppins;
font-size: 12px;
letter-spacing: 0.3px;
`
const Input2 = styled.input`
width: 250px;
height: 35px;
padding: 5px;
border: none;
outline: 2px solid black;
border-radius: 10px;
font-family: poppins;
font-size: 12px;
letter-spacing: 0.3px;
margin-right: 40px;
`
const Input1 = styled.input`
width: 550px;
height: 35px;
padding: 5px;
border: none;
outline: 2px solid black;
border-radius: 10px;
font-family: poppins;
font-size: 12px;
letter-spacing: 0.3px;
`
const Input = styled.input`
width: 300px;
height: 35px;
padding: 5px;
border: none;
outline: 2px solid black;
border-radius: 10px;
font-family: poppins;
font-size: 12px;
letter-spacing: 0.3px;
`

const Question = styled.div`
font-weight: 500;
font-size: 13px;
margin-bottom: 5px;
margin-left: 10px;
`
const Label = styled.div`
font-weight: 500;
font-size: 13px;
margin-bottom: 5px;
`

const OneItem = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
`

const InputForm = styled.form`
display:flex;
flex-direction: column;

`

const Upload = styled.label`
font-size: 14px;
color: gray;
cursor: pointer;
font-style: italic;
`

const DisplayImage = styled.img`
width: 100px;
height: 100px;
border-radius: 5px;
margin-right: 30px;;
border: 1px solid black;
object-fit: cover;;
`

const ImageHolder = styled.div`
display:flex;
align-items: center;
margin-bottom: 20px;
`

const HeadHolder = styled.div`
margin-top: 20px;
margin-bottom: 30px;
`

const Sub = styled.div`
font-size: 13px;
`

const HeadTitle = styled.div`
font-size: 18px;
font-weight: 600;
margin-bottom: 5px;
`

const Wrapper = styled.div`
width: 90%;
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