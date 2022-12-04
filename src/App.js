import React from 'react'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from './components/SignIn'
import LandingPage from './components/LandingPage'
import SignInAsUser from './components/SignInAsUser'
import SignUpAsAUser from './components/SignUpAsAUser'
import UserOtpVerify from './components/UserOtpVerfiy'
import DashboardScreenPage from './components/carownerdashboard/DashboardScreenPage'
import KYCPage from './components/carownerdashboard/KYCPage'
import UploadCarPage from './components/carownerdashboard/UploadCarPage'
import HiringUpdatePage from './components/carownerdashboard/HiringUpdatePage'
import DisplayCarsPage from './components/carownerdashboard/DisplayCarsPage'
import CarOwnerOtp from './components/CarOwnerOtp'
import HirerDashPage from './components/hirerdashboard/HirerDashPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/displaycars-carowner" element={<DisplayCarsPage/>}/>
          <Route path="/hiringupdate-carowner" element={<HiringUpdatePage/>}/>
          <Route path="/uploadcar-carowner" element={<UploadCarPage/>}/>
          <Route path="/kyc-carowner" element={<KYCPage/>}/>
          <Route path="/dashboard-carowner/:id" element={<DashboardScreenPage/>}/>
          <Route path="/dashboard-hirer/:id" element={<HirerDashPage/>}/>
          <Route path="/otpverify-carowner" element={<CarOwnerOtp/>}/>
          <Route path="/otpverify-hirer" element={<UserOtpVerify/>}/>
          <Route path="/signup-hirer" element={<SignUpAsAUser/>}/>
          <Route path="/signup-carowner" element={<SignUp/>}/>
          <Route path="/signin-hirer" element={<SignInAsUser/>}/>
          <Route path="/signin-carowner" element={<SignIn/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App