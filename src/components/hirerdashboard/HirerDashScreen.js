import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
// import { AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import ImageAndModel from './ImageAndModel'


const HirerDashScreen = () => {

    const [data, setData] = useState([])

    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    const getCarOwnerBookings = async () => {
        const res = await axios.get(`/api/one/hirer/hiredCars/${currentUserId}`)
        console.log(res?.data?.data)
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
                        <Number cl="green">{data?.hiredCars?.length}</Number>
                        <Label>Hiring since {moment(data?.createdAt).format("YYYY")}</Label>
                    </TextContent>
                    <Icon src="/images/home.png"/>
                  </CardWrapper>
                </PerformanceCard>
                <PerformanceCard mr="30px" ml="30px">
                  <CardWrapper>
                  <TextContent>
                        <Number cl="red">{data?.hiredCars?.length }</Number>
                        <Label>Hiring Upload since {moment(data?.createdAt).format("YYYY")}</Label>
                    </TextContent>
                    <Icon src="/images/caricon.png"/>
                  </CardWrapper>
                </PerformanceCard>
                <PerformanceCard>
                  <CardWrapper>
                  <TextContent>
                        <Number cl="blue">{data?.verified === false? "50%" : "100%"}</Number>
                        <Label>Complete Profile </Label>
                    </TextContent>
                    <Icon src="/images/exterior.png"/>
                  </CardWrapper>
                </PerformanceCard>
            </PerformanceCardHolder>
        </PerFormanceComp>
        <RecentComp>
            <Performance>Recent Car Hiring</Performance>
            {data?.hiredCars?.length === 0? <DisplayText>No Hiring yet ...</DisplayText>:
            <BookingCardHolder>
                <BookingCardHead>
                    <Booking>Booking</Booking>
                    <Subject>Subject</Subject>
                    <Status>Status</Status>
                    <Date>Schedule</Date>
                    <Amount>Amount</Amount>
                </BookingCardHead>
                <BookingHolder>
                    {data?.hiredCars?.map((props,i)=>(
                        i<3?
                             <BookingCard 
                             key={props?._id}
                             bg={i % 2 === 0? "white": "lightgray"}
                             >
                        {/* <BookItem>
                            <Image src={props?.carImage}/>
                            <Name>{props?.carModel}</Name>
                        </BookItem> */}
                        <ImageAndModel id={props?.carId}/>
                        <SubjectItem>Renting with {props?.driverNeeded? "Driver": "out Driver"}</SubjectItem>
                        <ButtonHold>
                            {
                                props?.pending? 
                               
                                <Button bg="green">Pending ...</Button>: <div>
                                    {props?.acceptOffer? <Button style={{color: "green"}}>Accepted Request</Button>: <Button style={{color: 'red'}}>Request Declined</Button>}
                                </div>
                            }
                            
                        </ButtonHold>
                        <DateHolder>{moment(props?.date).format("dd DD MM YY")} by {props?.time}</DateHolder>
                        <AmountHolder>N{props?.totalPrice}</AmountHolder>
                        {/* <DeleteIcon>
                            <AiFillDelete/>
                        </DeleteIcon> */}
                    </BookingCard>:null
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

// const DeleteIcon = styled.div`
// color: rgb(255,0,0);
// /* margin-right: 10px; */
// cursor: pointer;
// transition: all 660ms;
// :hover{
//     transform: scale(1.02);
// }
// `

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
/* transition: all 660ms;
:hover{
    transform: scale(1.02);
} */
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