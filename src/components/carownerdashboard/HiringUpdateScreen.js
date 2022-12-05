import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {AiFillDelete} from "react-icons/ai"
import { useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ErrorFunction } from '../Error'
import HirerImageAndName from './HirerImageAndName'
import CarNameAndDriver from './CarNameAndDriver'
import moment from 'moment'

const HiringUpdateScreen = () => {

    const [data, setData] = useState([])

    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    const getCarOwnerBookings = async () => {
        const res = await axios.get(`/api/one/owner/booking/${currentUserId}`)
        // console.log(res?.data?.data)
        setData(res?.data?.data?.bookings)
    }

    const acceptRequest = async (id) => {
        try {
           
                const res = await axios.post(`/api/accept/booking/${id}`)
                if(res){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Booking Completed`,
                        text: "Please endeavour to be at the pick up location on time",
                        showConfirmButton: false,
                        timer: 3000,
                      })
                }
            
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${ErrorFunction(error)}`,
                showConfirmButton: false,
                timer: 2500,
              });
        }
    }

    const declineRequest = async (id) => {
        try {
           
                const res = await axios.post(`/api/decline/booking/${id}`)
                if(res){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Booking Declined Completely`,
                        showConfirmButton: false,
                        timer: 3000,
                      })
                }
            
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${ErrorFunction(error)}`,
                showConfirmButton: false,
                timer: 2500,
              });
        }
    }

    useEffect(()=>{
        getCarOwnerBookings()
    })

  return (
    <Container>
        <Wrapper>
        <TitleAndSub>
            <Title>All Hiring Update</Title>     
        </TitleAndSub>
        {data?.length === 0 ? <DisplayText>No booking yet ...</DisplayText>: 
        <BookingCardHolder>
                <BookingCardHead>
                    <Booking>Booking</Booking>
                    <Subject>Subject</Subject>
                    <Status>Status</Status>
                    <Date>Date</Date>
                    <Amount>Amount</Amount>
                </BookingCardHead>
                <BookingHolder>
                    {data?.map((props,i)=>(
                        i<3 && props?.declineOffer === false?
                             <BookingCard bg={i % 2 === 0? "white" : "lightgray"} key={props?._id}>
                      
                        <HirerImageAndName id={props?.hirerId}/>
                        <CarNameAndDriver carId={props?.carId} driver={props?.driverNeeded}/>
                        <ButtonHold>
                            {props?.acceptOffer === false? 
                            <Button bg="green"
                            onClick={()=>{
                                acceptRequest(props?._id)
                            }}
                            >Accept</Button>:
                            <Button 
                            style={{color: "green"}}
                            >Accepted</Button>}
                        </ButtonHold>
                        <DateHolder>{moment(props?.date).format("dd DD MM YYYY")}</DateHolder>
                        <AmountHolder>N{props?.totalPrice}</AmountHolder>
                        {
                            props?.acceptOffer === false? 
                        
                        <DeleteIcon onClick={()=>{
                            declineRequest(props?._id)
                        }}>
                            <AiFillDelete/>
                        </DeleteIcon>:null}
                    </BookingCard>: null
                    ))}
               
                  
                </BookingHolder>
            </BookingCardHolder>}
        </Wrapper>
    </Container>
  )
}

export default HiringUpdateScreen

const DisplayText = styled.div``

const DeleteIcon = styled.div`
color: rgb(255,0,0);
/* margin-right: 10px; */
cursor: pointer;
transition: all 660ms;
:hover{
    transform: scale(1.02);
}
`

const AmountHolder = styled.div`
width: 150px;
font-size: 14px;
/* background-color: red; */
margin-right: 30px;
display:flex;
justify-content: flex-end;
`

const DateHolder = styled.div`
width: 180px;
font-size: 12px;
/* background-color: blue; */
`

const Button = styled.div`
background-color:${({bg})=>bg};
font-size: 12px;
color: white;
width: 100px;
height: 40px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 5px;
cursor: pointer;
transition: all 660ms;
:hover{
    transform: scale(1.02);
}
`

const ButtonHold = styled.div`
width: 200px;
/* background-color: purple; */
`


const BookingCard = styled.div`
width: auto;
background-color: ${({bg})=>bg};
height: 70px;
display: flex;
align-items: center;
font-weight: 500;
`

const BookingHolder = styled.div`
display:flex;
flex-direction: column;
width: 100%;
`
const Amount = styled.div`
width: 150px;
/* background-color: red; */
margin-right: 50px;
display:flex;
justify-content: flex-end;
`


const Date = styled.div`
width: 180px;
/* background-color: blue; */
/* flex: 1; */
`

const Status = styled.div`
width: 200px;
/* background-color: purple; */
`

const Subject = styled.div`
width: 270px;
/* background-color: red; */
`

const Booking = styled.div`
width: 200px;
/* background-color: green; */
`

const BookingCardHead = styled.div`
display:flex;
font-size: 15px;
font-weight: 500;
width: 100%;
margin-top: 10px;
margin-bottom: 10px;
/* background-color: gray; */
`

const BookingCardHolder = styled.div`
width: 100%;
display:flex;
flex-direction: column;
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

