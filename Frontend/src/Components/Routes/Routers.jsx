import React from 'react'
import { Route,Routes } from 'react-router-dom'
import PostForm from '../Main/Form'
import Photos from '../NavCompo/Photos'
import Video from '../NavCompo/Video'
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/text" element={<h1><PostForm/></h1>} />
        <Route path="/photo" element={<h1><Photos /></h1>} />
        <Route path="/video" element={<h1><Video /></h1>} /> 
         <Route path="/*" element={<h1><Video/></h1>} />
      </Routes>
    </div>
  )
}
