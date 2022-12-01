import React from 'react'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from './components/SignIn'
import LandingPage from './components/LandingPage'
import SignInAsUser from './components/SignInAsUser'
import SignUpAsAUser from './components/SignUpAsAUser'
import UserOtpVerify from './components/UserOtpVerfiy'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
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