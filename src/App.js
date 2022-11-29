import React from 'react'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from './components/SignIn'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup-carowner" element={<SignUp/>}/>
          <Route path="/signin-carowner" element={<SignIn/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App