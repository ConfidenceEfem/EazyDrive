import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import styled from "styled-components"


const HirerDashScreen = () => {

    const [data, setData] = useState([])

    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    const getCarOwnerBookings = async () => {
        const res = await axios.get(`/api/one/owner/booking/${currentUserId}`)
        // console.log(res?.data?.data)
        setData(res?.data?.data)
    }

    useEffect(()=>{
        getCarOwnerBookings()
    })
  return (
  <Container>
    <Wrapper>
        <ScreenTitle>Rental Dashboard</ScreenTitle>
        <PerFormanceComp>
            <Performance>Performance</Performance>
            <PerformanceCardHolder>
                <PerformanceCard>
                  <CardWrapper>
                  <TextContent>
                        <Number cl="green">{data?.bookings?.length}</Number>
                        <Label>Bookings since {moment(data?.createdAt).format("YYYY")}</Label>
                    </TextContent>
                    <Icon src="/images/home.png"/>
                  </CardWrapper>
                </PerformanceCard>
                <PerformanceCard mr="30px" ml="30px">
                  <CardWrapper>
                  <TextContent>
                        <Number cl="green">{data?.CarUpload?.length }</Number>
                        <Label>Car Upload since {moment(data?.createdAt).format("YYYY")}</Label>
                    </TextContent>
                    <Icon src="/images/home.png"/>
                  </CardWrapper>
                </PerformanceCard>
                <PerformanceCard>
                  <CardWrapper>
                  <TextContent>
                        <Number cl="blue">10</Number>
                        <Label>Hired since {moment(data?.createdAt).format("YYYY")}</Label>
                    </TextContent>
                    <Icon src="/images/exterior.png"/>
                  </CardWrapper>
                </PerformanceCard>
            </PerformanceCardHolder>
        </PerFormanceComp>
        <RecentComp>
            <Performance>Recent Car Bookings</Performance>
            {data?.bookings?.length === 0? <DisplayText>No bookings yet ...</DisplayText>:
            <BookingCardHolder>
                <BookingCardHead>
                    <Booking>Booking</Booking>
                    <Subject>Subject</Subject>
                    <Status>Status</Status>
                    <Date>Date</Date>
                    <Amount>Amount</Amount>
                </BookingCardHead>
                <BookingHolder>
                    {data?.bookings?.map((props)=>(
                             <BookingCard bg="white">
                        <BookItem>
                            <Image src="/images/avatar.png"/>
                            <Name>Confidence Efem</Name>
                        </BookItem>
                        <SubjectItem>Red Toyota Camery</SubjectItem>
                        <ButtonHold>
                            <Button bg="green">Accept</Button>
                        </ButtonHold>
                        <DateHolder>26 Sept 2022</DateHolder>
                        <AmountHolder>N5000</AmountHolder>
                        <DeleteIcon>
                            <AiFillDelete/>
                        </DeleteIcon>
                    </BookingCard>
                    ))}
               
                  
                </BookingHolder>
            </BookingCardHolder>}
        </RecentComp>
    </Wrapper>
  </Container>
  )
}

export default HirerDashScreen

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

const SubjectItem = styled.div`
width: 270px;
font-size: 12px;
/* background-color: purple; */
`

const Name = styled.div`
font-size: 12px;
font-weight: 500;
`

const Image = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;
object-fit: cover;
margin-right: 8px;
margin-left: 5px;
`

const BookItem = styled.div`
display:flex;
align-items: center;
width: 200px;
/* background-color: green; */
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
const RecentComp = styled.div``
const Icon = styled.img`
width: 60px;
height: 60px;
object-fit: contain;
`

const Label = styled.div`
font-size: 12px;
`

const Number = styled.div`
color: ${({cl})=>cl};
font-size: 30px;
margin-bottom: 5px;
`

const TextContent = styled.div``

const CardWrapper = styled.div`
width: 80%;
display: flex;
align-items: flex-end;
justify-content: space-between;
`

const PerformanceCard = styled.div`
width: 310px;
height: 120px;
background-color: white;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
display: flex;
align-items: center;
justify-content: center;
margin-right: ${({mr})=>mr};
margin-left: ${({ml})=>ml};
`

const PerformanceCardHolder = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
`

const Performance = styled.div`
font-weight: 600;
margin-bottom: 15px;
`

const PerFormanceComp = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 60px;
`

const ScreenTitle = styled.div`
font-size: 25px;
color: gray;
margin-top: 20px;
margin-bottom: 40px;
/* font-weight: lighter; */
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