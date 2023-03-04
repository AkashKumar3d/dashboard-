import React from 'react'
import { Routes, Route } from "react-router-dom";
import Customer from '../../Pages/Customer';
import Inventory  from '../../Pages/Inventory';
import Dashboard from '../../Pages/Dashboard';
import Order from '../../Pages/Order';
export default function AppRoutes() {
  return (
 
   <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/inventory' element={<Inventory/>}/>
       <Route path='/order' element={<Order/>}/>
       <Route path='/customer' element={<Customer/>}/>
   </Routes>
   
  )
}
