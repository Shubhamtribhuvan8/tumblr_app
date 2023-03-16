import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DeleteButton from '../Main/DeletePost'
export default function MainRouters() {
  return (
    <div>
      <Routes>
        <Route path="/products/:id" element={<DeleteButton/>} /> 
      </Routes>
    </div>
  )
}
