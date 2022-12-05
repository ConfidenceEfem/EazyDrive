import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import Card from '../Card'
import { AuthContext } from '../Redux/AuthProvider'

const HireCarScreen = () => {

  const [data, setData] = useState([])

  const {location} = useContext(AuthContext)


  const getCarOwnerCars = async () => {
      const res = await axios.get(`/api/allCar`)
    //   console.log(res?.data?.data)
      setData(res?.data?.data)
  }

  useEffect(()=>{
    getCarOwnerCars()
  })

  return (
    <Container>
        <Wrapper>
        <TitleAndSub>
            <Title>All Cars</Title>
            
        </TitleAndSub>
        <CardHolder>
          {
            data?.filter((e)=>{
                if(location === ""){
                  return e
                }else if(e.city.toLowerCase().includes(location.toLowerCase())){
                  return e
                }
              })?.map((props,i)=>(
                
           i<=8?
               <Card props={props}/>: null
            ))
          }
           
          
        </CardHolder>
        </Wrapper>
    </Container>
  )
}

export default HireCarScreen


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