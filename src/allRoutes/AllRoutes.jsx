import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SinglePost from '../pages/SinglePost'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>.single-post .img
        <Route path='/posts/:id' element={<SinglePost/>}/>.single-post .img
    </Routes>
  )
}

export default AllRoutes