import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

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
  )
}
