import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import Card from '../Card'

const DisplayCarsScreen = () => {

  const [data, setData] = useState([])

  const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

  const getCarOwnerCars = async () => {
      const res = await axios.get(`/api/car/owner/${currentUserId}`)
      console.log(res?.data?.data?.CarUpload)
      setData(res?.data?.data?.CarUpload)
  }

  useEffect(()=>{
    getCarOwnerCars()
  })

  return (
    <Container>
        <Wrapper>
        <TitleAndSub>
            <Title>My Uploaded Cars</Title>
            
        </TitleAndSub>
        <CardHolder>
          {
            data?.map((props)=>(
           
               <Card props={props}/>
            ))
          }
           
          
        </CardHolder>
        </Wrapper>
    </Container>
  )
}

export default DisplayCarsScreen


const CardHolder = styled.div`
width: 100%;
display:flex;
flex-wrap: wrap;
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