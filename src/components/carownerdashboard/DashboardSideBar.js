import React from 'react'
import styled from "styled-components"
import { AiFillAppstore, AiFillSetting, AiOutlineLogout, AiOutlineSwitcher, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentUser } from '../Redux/EarliReducers'

const DashboardSideBar = () => {

    const currentuserId = useSelector((state)=>state?.persistedReducer?.currentUser?.data?._id)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(addCurrentUser())
    }

  return (
    <Container>
        <NavItem to={`/dashboard-carowner/${currentuserId}`}>
            <NavAndIcon >
                <NavIcon>
                    <AiFillAppstore/>
                </NavIcon>
                <Nav>DashBoard</Nav>
            </NavAndIcon>
        </NavItem>
        <NavItem to="/kyc-carowner">
            <NavAndIcon>
                <NavIcon>
                    <AiOutlineUser/>
                </NavIcon>
                <Nav>KYC Verification</Nav>
            </NavAndIcon>
        </NavItem>
        <NavItem to="/uploadcar-carowner">
            <NavAndIcon>
                <NavIcon>
                    <AiOutlineUpload/>
                </NavIcon>
                <Nav>Upload Car for Hiring</Nav>
            </NavAndIcon>
        </NavItem>
        <NavItem to="/hiringupdate-carowner">
            <NavAndIcon>
                <NavIcon>
                    <AiOutlineSwitcher/>
                </NavIcon>
                <Nav>Hiring Update</Nav>
            </NavAndIcon>
        </NavItem>
        <NavItem to="/displaycars-carowner">
            <NavAndIcon>
                <NavIcon>
                    <AiFillSetting/>
                </NavIcon>
                <Nav>Uploaded Cars</Nav>
            </NavAndIcon>
        </NavItem>
        <NavItem to="/"  onClick={logout}>
            <NavAndIcon>
                <NavIcon>
                    <AiOutlineLogout/>
                </NavIcon>
                <Nav>Logout</Nav>
            </NavAndIcon>
        </NavItem>
    </Container>
  )
}

export default DashboardSideBar



const Nav = styled.div`
font-size: 14px;
font-weight: 500;
letter-spacing: 0.3px;
/* background-color: rgb(255,140,0); */
    
`


const NavIcon = styled.div`
font-size: 20px;
margin-right: 10px;
display:flex;
align-items: center;
color: orange;

&.active{
    color: black;
}
`

const NavAndIcon = styled.div`
margin-left: 20px;
display:flex;
align-items: center;
`

const NavItem = styled(NavLink)`
width: 100%;
text-decoration: none;
/* background-color: white; */
height: 55px;
display: flex;
align-items: center;
color: white;
cursor: pointer;
margin-bottom: 20px;
margin-top: 20px;

&.active{
    background-color: rgb(255,140,0);
    color: white;
}

`
const Container = styled.div`
width: 280px;
background-color: rgb(0,0,0,0.9);
min-height: calc(100vh - 90px);
height: auto;
display:flex;
flex-direction: column;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`