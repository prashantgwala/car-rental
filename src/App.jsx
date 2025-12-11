import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'
// import Cars from './pages/cars'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCar from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'
import Cars from './pages/cars'

const App = () => {
        
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (  
    <>    
    {showLogin && <Login setShowLogin={setShowLogin}/>}
     {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}     
          
    <Routes>              
      <Route path='/' element={<Home/>}/>    
      <Route path='/car-details/:id' element={<CarDetails/>}/>   
      <Route path='/cars' element={<Cars/>}/>     
      <Route path='/my-bookings' element={<MyBookings/>}/>    
      <Route path='/owner' element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='add-cars' element={<AddCar/>}/>
        <Route path='manage-cars' element={<ManageCar/>}/>
        <Route path='manage-bookings' element={<ManageBookings/>}/>
        </Route>  
    </Routes>   

   {!isOwnerPath && <Footer/> }
   
    </>
  )
}   

export default App;   