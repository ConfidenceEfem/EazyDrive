import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const ImageAndModel = ({id}) => {
    const [data, setData] = useState([])
    const getOneHiring = async () => {
        const res = await axios.get(`/api/car/one/${id}`)

        // console.log(res?.data?.data)
        setData(res?.data?.data)
    }

    useEffect(()=>{
        getOneHiring()
    })
  return (
    <BookItem>
    <Image src={data?.carImage}/>
    <Name>{data?.carModel}</Name>
</BookItem>
  )
}

export default ImageAndModel


const Name = styled.div`
font-size: 12px;
font-weight: 500;
`

const Image = styled.img`
width: 60px;
height: 60px;
/* border-radius: 50%; */
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