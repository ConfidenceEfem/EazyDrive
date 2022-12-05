import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Card from './Card'

const ModalPage = ({toggle, setToggle,location}) => {

  const [data, setData] = useState([])

  const getAllCar = async () => {
    const res = await axios.get(`/api/allCar`)
    // console.log(res?.data?.data)
    setData(res?.data?.data)
  }

  useEffect(()=>{
getAllCar()
  })

  return (
    <Container>
      <Wrapper>
        <CancelItem>
          <CancelButton
          onClick={()=>{
            setToggle(!toggle)
          }}
          >X</CancelButton>
        </CancelItem>
        <CardHolder>
          {
            data?.filter((e)=>{
              if(location === ""){
                return e 
              }else if(e.city.toLowerCase().includes(location.toLowerCase())){
                return e
              }
            })?.map((props)=>(
               <Card props={props} cl="white"/>
            ))
          }
         
          
        </CardHolder>
      
       
      </Wrapper>
    </Container>
  )
}

export default ModalPage

const CardHolder = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const CancelButton = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: rgb(255,0,0,0.5);
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const CancelItem = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-top: 30px;
margin-bottom: 30px;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 100vh;
position: fixed;
overflow-y: scroll;
background-color: rgb(0,0,0,0.8);
top: 0px;
z-index: 1;
display:flex;
justify-content: center;

`
