import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from './admin/App';
import Guest from './guest/app';
import Shop from  './shop/app'
import User from "./user/app"
import Paymentpage from "./user/Paymentpage";
export default function App() {
  return (
    <Routes>
      <Route path='/Admin/*' element={<Admin/>} />
      <Route path='/*' element={<Guest/>} />
      <Route path='/User/*' element={<User/>} />
      <Route path='/Shop/*' element={<Shop/>}/>
      <Route path="/Payment/:bookingid" element={<Paymentpage/>}/>
    </Routes>
  )
}
