import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import styled from "styled-components"
import Swal from 'sweetalert2'
import { ErrorFunction } from '../Error'

const HireDetailScreen = ({id}) => {
    const [data, setData] = useState([])
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const [hour, setHour] = useState(0)
    const [day, setDay] = useState(0)
    const [date, setDate] = useState()
    const [time, setTime] = useState("")

    const navigate = useNavigate()

    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    console.log(toggle)

    const getOneHiring = async () => {
        const res = await axios.get(`/api/car/one/${id}`)

        // console.log(res?.data?.data)
        setData(res?.data?.data)
    }

    const addHour = () => {
        setHour(hour + 1)
        
    }
    const addDay = () => {
        setDay(day + 1)
        
    }
    const subtractHour = () => {
        setHour(hour - 1)
        if(hour <= 0){
            setHour(0)
        }
    }
    const subtractDay = () => {
        setDay(day - 1)
        if(day <= 0){
            setDay(0)
        }
    }


  

    useEffect(()=>{
        getOneHiring()
    })


    const hireACar = async () => {
        try {
            setLoading(true)
            if(time === "" || date === ""){
                Swal.fire({
                position: 'center',
                icon: 'error',
                title: `Please fill in all details`,
                showConfirmButton: false,
                timer: 2000,
              });
            }else{
                const res = await axios.post(`/api/hire/${currentUserId}/${id}`, {
                    noOfDays: day,
                    noOfHrs: hour,
                    totalPrice: toggle === false? (hour * data?.pricePerHr) + (day * data?.pricePerDay): (hour * data?.priceForDriverPerHr) + (day * data?.priceForDriverPerDay),
                    date,
                    time,
                    driverNeeded: toggle
                })
                if(res){
                    setLoading(false)
                    console.log(res?.data?.data)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Book Successfully`,
                        text: "A mail has been sent to the car owner to confirm booking",
                        showConfirmButton: false,
                        timer: 2500,
                      }).then(() => {
                        navigate(`/hiringupdate-hirer`);
                      });
                }
            }
        } catch (error) {
            setLoading(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${ErrorFunction(error)}`,
                showConfirmButton: false,
                timer: 2500,
              });
        }
    }

  return (
    <Container>
        <Wrapper>
        {/* <TitleAndSub>
            <Title>{data?.carModel}</Title>   
        </TitleAndSub> */}
        <LeftAndRight>
            <Leftitems>
                <ImageAndName>
                    <Image src={data?.carImage}/>
                    <Title>{data?.carModel}</Title>   
                </ImageAndName>
                <DetailTagHold>
                <DetailAndTag>
                                    <Tag>Car Brand</Tag>
                                    <Detail>{data?.carBrand}</Detail>
                                </DetailAndTag>
                                <DetailAndTag>
                                    <Tag>Car Plate Number</Tag>
                                    <Detail>{data?.carPlateNumber}</Detail>
                                </DetailAndTag>
                                <DetailAndTag>
                                    <Tag>Car Model</Tag>
                                    <Detail>{data?.carModel}</Detail>
                                </DetailAndTag>
                             
                </DetailTagHold>
                <DetailTagHold>
                    <DetailAndTag>
                        <Tag>City</Tag>
                        <Detail>{data?.city}</Detail>
                    </DetailAndTag> 
                    <DetailAndTag>
                        <Tag>Driver</Tag>
                        <Detail>{data?.driverAvailable ? "Available" : "Unavailable"}</Detail>
                    </DetailAndTag>
                    <DetailAndTag>
                        <Tag>No. of Hire:</Tag>
                        <Detail>{data?.allHiring?.length}</Detail>
                    </DetailAndTag>
                </DetailTagHold>
                <DetailTagHold>
                    <DetailAndTag>
                    <Tag>Pick Up Location:</Tag>
                    <Detail>
                        {data?.pickUpLocation}
                        
                    </Detail>
                    </DetailAndTag>
                </DetailTagHold>
                <DetailTagHold>
                    <DetailAndTag>
                        <Tag>Car Owner</Tag>
                        <Detail>
                         <a href={data?.carOwner?.image} target="_blank" rel="noreferrer">
                             <Profile src={data?.carOwner?.image} 
                            onClick={()=>{
                               
                            }}
                            />
                         </a>
                           
                            <OwnerName>{data?.carOwner?.fullName}</OwnerName>
                        </Detail>
                    </DetailAndTag>
                </DetailTagHold>
            </Leftitems>
            <RightItems>
                <RightWrapper>
                    {
                        data?.driverAvailable === false ?
                       
                            <FirstPart>
                        <PriceAndTag>
                            <PriceLabel>Price/hr:</PriceLabel>
                            <Price>N{data?.pricePerHr?.toFixed(2)}</Price>
                        </PriceAndTag>
                        <PriceAndTag>
                            <PriceLabel>Price/day:</PriceLabel>
                            <Price>N{data?.pricePerDay?.toFixed(2)}</Price>
                        </PriceAndTag>
                        

                    </FirstPart>
                        
                    
                    :
                    <div style={{width: "100%"}}>
                        {toggle === false? 
                             <FirstPart>
                             <PriceAndTag>
                                 <PriceLabel>Price/hr:</PriceLabel>
                                 <Price>N{data?.pricePerHr?.toFixed(2)}</Price>
                             </PriceAndTag>
                             <PriceAndTag>
                                 <PriceLabel>Price/day:</PriceLabel>
                                 <Price>N{data?.pricePerDay?.toFixed(2)}</Price>
                             </PriceAndTag>
                             {data?.driverAvailable === false? null :
                             <DriverTick>
                                 <input type="checkbox" onClick={()=>{
                                     setToggle(!toggle)
                                 }}/>
                                 <DriverTag>Need Driver?</DriverTag>
                             </DriverTick>}
     
                         </FirstPart>: 
                         <FirstPart>
                        <PriceAndTag>
                            <PriceLabel>Price/hr with Driver:</PriceLabel>
                            <Price>N{data?.priceForDriverPerHr?.toFixed(2)}</Price>
                        </PriceAndTag>
                        <PriceAndTag>
                            <PriceLabel>Price/day with Driver:</PriceLabel>
                            <Price>N{data?.priceForDriverPerDay?.toFixed(2)}</Price>
                        </PriceAndTag>
                        {data?.driverAvailable === false? null :
                        <DriverTick>
                            <input type="checkbox" 
                            onClick={()=>{
                                setToggle(!toggle)
                            }}/>
                            <DriverTag> Need Driver?</DriverTag>
                        </DriverTick>}
                    </FirstPart>
                        }
                    </div>
                    }
                    <SecondPart>
                        <DetailAndCounterItem>
                            <DetailTag>No. of Hour:</DetailTag>
                            <CounterItem>
                                <Button onClick={addHour}>+</Button>
                                <Number>{hour}</Number>
                                <Button onClick={subtractHour}>-</Button>
                            </CounterItem>
                        </DetailAndCounterItem>
                        <DetailAndCounterItem>
                            <DetailTag>No. of Day:</DetailTag>
                            <CounterItem>
                                <Button onClick={addDay}>+</Button>
                                <Number>{day}</Number>
                                <Button onClick={subtractDay}>-</Button>
                            </CounterItem>
                        </DetailAndCounterItem>
                        <DetailAndCounterItem>
                            <DetailTag>Time:</DetailTag>
                            <CounterItem>
                                <Input type="text" placeholder="2pm" value={time} onChange={(e)=>{
                                    setTime(e.target.value)
                                }}/>
                            </CounterItem>
                        </DetailAndCounterItem>
                        <DetailAndCounterItem>
                            <DetailTag>Date:</DetailTag>
                            <CounterItem>
                                <Input type="date"  value={date} onChange={(e)=>{
                                    setDate(e.target.value)
                                }}/>
                            </CounterItem>
                        </DetailAndCounterItem>
                    </SecondPart>
                    <ThirdPart>
                    <PriceAndTag style={{
                        marginTop: "25px",
                        fontWeight: "600"
                    }}>
                            <PriceLabel>Total Price: </PriceLabel>
                            {toggle === false? 
                            <Price>N {(hour * data?.pricePerHr) + (day * data?.pricePerDay)} </Price>
                            :
                            <Price>N {(hour * data?.priceForDriverPerHr) + (day * data?.priceForDriverPerDay)} </Price>
                            }
                        </PriceAndTag>
                    </ThirdPart>
                    {
                        data?.hired === false? 
                        <div style={{width: "100%"}}>
                            {loading === false? 
                            <BookButton
                        onClick={hireACar}
                        >Hire Now</BookButton>
                        :  
                        <BookButton
                        // onClick={hireACar}
                        >
                         <SyncLoader color="white" margin={4}size={8}/>   
                        </BookButton>
                        }
                        </div>
                        
                        :
                        <BookButton style={{backgroundColor: "lightgray"}}>Unavailable</BookButton>
                    }
                    
                </RightWrapper> 
            </RightItems>
        </LeftAndRight>
        </Wrapper>
    </Container>
  )
}

export default HireDetailScreen


const BookButton = styled.div`
width: 100%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color: orange;
cursor: pointer;
transition: all 550ms;
border-radius: 4px;
:hover{
    transform: scale(1.02);
}
`
const Input = styled.input`
width: 100px;
padding: 3px;
font-family: poppins;
`

const Number = styled.div`
margin: 0 7px;
font-weight: 500;
`

const Button = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: orange;
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 550ms;
:hover{
    transform: scale(1.02);
}
`
const CounterItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`

const DetailTag = styled.div`
font-size: 14px;
`
const DetailAndCounterItem = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
const DriverTag = styled.div`
font-size: 14px;
margin-left: 10px;
`
const DriverTick = styled.div`
display:flex;
align-items: center;
margin-bottom: 10px;
`

const Price = styled.div`
color: orange;
font-size: 18px;
font-weight: 500;
`

const PriceLabel = styled.div`

`

const PriceAndTag = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

const ThirdPart = styled.div`
width: 100%;
display:flex;
flex-direction: column;
`
const SecondPart = styled.div`
width: 100%;
margin-top: 20px;
border-bottom: 2px solid orange;
`
const FirstPart = styled.div`
width: 100%;
margin-top: 25px;
border-bottom: 2px solid orange;
`

const RightWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
display: flex;
`

const OwnerName = styled.div`
font-size: 14px;
`

const Profile = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
cursor: pointer;

`

const DetailTagHold = styled.div`
display: flex;
margin-bottom: 15px;
width: 430px;
justify-content: space-between;
`

const Detail = styled.div`
display:flex;
align-items: center;
`

const Tag = styled.div`
font-size: 13px;
font-weight: 500;
color: orange;
`

const DetailAndTag = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
/* margin-right: 20px; */
`

const Image = styled.img`
width: 600px;
border-radius: 10px;
object-fit: cover;
height: 300px;
`
const ImageAndName = styled.div``

const RightItems = styled.div`
width: 350px;
background-color: white;
height: 500px;
border-radius: 10px;
display: flex;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

const Leftitems = styled.div`
display: flex;
flex-direction: column;
`
const LeftAndRight = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const Title = styled.div`
font-size: 18px;
font-weight: 600;
margin-bottom: 15px;
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