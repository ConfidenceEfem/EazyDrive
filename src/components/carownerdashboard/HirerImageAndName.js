import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const HirerImageAndName = ({id}) => {

    const [data, setData] = useState([])

    const getUserProfile = async () => {
        const res = await axios.get(`/api/one/hirer/${id}`)
        // console.log(res?.data?.data)
        setData(res?.data?.data)
    }

    useEffect(()=>{
getUserProfile()
    })

  return (
    <BookItem>
    <Image src={data?.image}/>
    <Name>{data?.fullName}</Name>
</BookItem>
  )
}

export default HirerImageAndName


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