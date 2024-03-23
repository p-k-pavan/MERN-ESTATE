import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'
import Profile from './assets/pages/Profile'
import About from './assets/pages/About'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Sign-in' element={<SignIn/>}/>
    <Route path='/sign-out' element={<SignUp/>}/>
    <Route path='/about' element={<Profile/>}/>
    <Route path='/profile' element={<About/>}/>
  </Routes>
  </BrowserRouter>
}
