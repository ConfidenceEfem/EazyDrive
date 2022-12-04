import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {BiSearch} from "react-icons/bi"
import { AiOutlineMore, AiTwotoneBell } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import axios from 'axios'

const HirerHeader = () => {

    const [data, setData] = useState([])

    const currentUserName = useSelector((state)=>state?.persistedReducer?.currentUser?.data?.fullName)
    const currentUserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    const getOneUser = async () => {
        const res = await axios.get(`/api/one/owner/${currentUserId}`)
        // console.log(res)
        setData(res?.data?.data)
    }

    useEffect(()=>{  
      
        getOneUser()
    })


  return (
    <Container>
        <Wrapper>
            <LeftItems>
                <Logo src="/images/eazylogo.png"/>
                <SearchHolder>
                    <SearchIcon>
                        <BiSearch/>
                    </SearchIcon>
                    <Input placeholder="Type in to Search for cars in any city..."/>
                </SearchHolder>
            </LeftItems>
            <RightItems>
                <NotificationIcon>
                    <AiTwotoneBell/>
                </NotificationIcon>
                <NameAndAvatar>
                    {data?.image? <Avatar src={data?.image}/>: 
                    <Avatar src="/images/avatar.png"/>}
                    <Name>{currentUserName}</Name>
                </NameAndAvatar>
                <DotIcon>
                    <AiOutlineMore/>
                </DotIcon>
            </RightItems>
        </Wrapper>
    </Container>
  )
}

export default HirerHeader

const DotIcon = styled.div`
cursor: pointer;
font-size: 18px;
/* color: orange; */
`
const Name = styled.div`
font-size: 14px;
font-weight: 500;
`

const Avatar = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`

const NameAndAvatar = styled.div`
display:flex;
align-items: center;
margin: 0 20px;
`

const NotificationIcon = styled.div`
cursor: pointer;
font-size: 18px;
color: orange;
`

const Input = styled.input`
outline: none;
width: 300px;
border-bottom: 1px solid silver;
border-top: none;
border-left: none;
border-right: none;
font-family: poppins;
padding-bottom: 5px;
font-weight: 500;
letter-spacing: 0.3px;
`

const SearchIcon = styled.div`
font-size: 22px;
cursor: pointer;
color: orange;
margin-right: 20px;
`

const SearchHolder = styled.div`
display:flex;
align-items: center;

`

const Logo = styled.img`
width: 150px;
height: 60px;
object-fit: cover;
cursor: pointer;
margin-right: 110px;
`

const RightItems = styled.div`
display:flex;
align-items: center;
`

const LeftItems = styled.div`
display:flex;
align-items: center;
`

const Wrapper = styled.div`
width: 90%;
display:flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
height: 90px;
background-color: white;
display:flex;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
justify-content: center;
align-items: center;
/* margin-bottom: 10px; */
`