import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from './admin/App';
import Guest from './guest/app';
import Shop from  './shop/app'
import User from "./user/app"
export default function App() {
  return (
    <Routes>
      <Route path='/Admin/*' element={<Admin/>} />
      <Route path='/*' element={<Guest/>} />
      <Route path='/User/*' element={<User/>} />
      <Route path='/Shop/*' element={<Shop/>}/>
      

    </Routes>
  )
}
