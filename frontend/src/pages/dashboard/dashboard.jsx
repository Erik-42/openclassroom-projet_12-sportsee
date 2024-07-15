import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Sidebar from './components/sidebar/sidebar.jsx'
import NavBar from './components/navbar/navbar.jsx'
import User from './components/user/user.jsx'
import Charts from './components/charts/charts.jsx'
import UserStats from './components/userStats/userStats.jsx'


export default function Dashboard() {
    const {id}=useParams()
    const [userInfos,setUserInfos]=useState({
        userInfos:{
            firstName:""
        }
    })
    useEffect(()=>{
axios.get(`http://localhost:3000/user/${id}`).then(data =>{
    setUserInfos(data.data.data)
})
    },[id]
)
  return (
    <div>Dashboard user {userInfos.userInfos.firstName}</div>
    <Sidebar></Sidebar>
    <NavBar></NavBar>
    <User></User>
    <Charts></Charts>
    <UserStats></UserStats>
  )
}
