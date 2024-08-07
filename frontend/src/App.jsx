import React, {} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import Error404 from './pages/error404/error404.jsx'
import './App.module.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard/:userId" element={<Dashboard></Dashboard>}></Route>
        <Route path='/error' element={<Error404 />} ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
