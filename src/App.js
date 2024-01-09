import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Doctor from './Components/OurDoctor/OurDoctor'
import Treatment from './Components/Treatment/Treatment'
import Singnin from './Components/SignIn-SingUp/Singnin'
import Singnup from './Components/SignIn-SingUp/Singnup'
import ProtectedRoute from './Components/Authorization/ProtectedRoute'
import Profile from './Components/Dashboard/Profile'
import Recptionlist from './Components/Dashboard/ReceptionList'
import AddReception from './Components/Dashboard/AddReception'
import AddApointment from './Components/Dashboard/Apointment/AddApointment'
import ApointmentList from './Components/Dashboard/Apointment/ApointmentList'
import MyApointment from './Components/Dashboard/Apointment/MyApointment'


function App() {
  return <>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/doctor' element={ <Doctor/> } />
      <Route path='/treatment' element={ <Treatment/> } />
      <Route path='/signin' element={ <Singnin/> } />
      <Route path='/signup' element={ <Singnup/> } />
      <Route path='/dashboard/profile' element={ <ProtectedRoute><Profile/></ProtectedRoute> } />
      <Route path='/dashboard/receptionlist' element={ <ProtectedRoute><Recptionlist/></ProtectedRoute> } />
      <Route path='/dashboard/add-reception' element={ <ProtectedRoute><AddReception/></ProtectedRoute> } />
      <Route path='/dashboard/add-apointment' element={ <ProtectedRoute><AddApointment/></ProtectedRoute> } />
      <Route path='/dashboard/apointment-list' element={ <ProtectedRoute><ApointmentList/></ProtectedRoute> } />
      <Route path='/dashboard/apointment-list-my' element={ <ProtectedRoute><MyApointment/></ProtectedRoute> } />
    </Routes>
  </>
}

export default App
