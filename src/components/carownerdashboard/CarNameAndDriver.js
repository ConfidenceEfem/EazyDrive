import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const CarNameAndDriver = ({carId,driver}) => {

    const [data, setData] = useState([])

    const getOneHiring = async () => {
        const res = await axios.get(`/api/car/one/${carId}`)

        // console.log(res?.data?.data)
        setData(res?.data?.data)
    }

    useEffect(()=>{
        getOneHiring()
    })

  return (
    <SubjectItem>{data?.carModel} {driver? " with Driver": ""}</SubjectItem>
  )
}

export default CarNameAndDriver

const SubjectItem = styled.div`
width: 270px;
font-size: 12px;
/* background-color: purple; */
`