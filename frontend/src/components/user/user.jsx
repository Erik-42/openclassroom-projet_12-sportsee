import React, { useEffect, useState } from 'react'
import './user.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function user() {
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
    <section className="user">
    <h1 className="user__name">Bonjour {userInfos.userInfos.firstName}</h1>
    <p className="user__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}
