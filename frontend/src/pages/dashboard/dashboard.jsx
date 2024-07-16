import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Sidebar from '../../components/sidebar/sidebar.jsx'
import NavBar from '../../components/navbar/navbar.jsx'
import User from '../../components/user/user.jsx'
import ChartsActivity from '../../components/chartsActivty/chartsActivity.jsx'
import ChartsSession from '../../components/chartsSession/chartsSession.jsx'
import ChartsWeb from '../../components/chartsWeb/chartsWeb.jsx'
import ChartsScore from '../../components/chartsScore/chartsScore.jsx'
import ChartsPerf from '../../components/chartsPerf/chartsPerf.jsx'
import UserStats from '../../components/userStats/userStats.jsx'
import Layout from '../../components/layout/layout.jsx'


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
    <>
    <div className='menus'>
        <Sidebar className='menus__sidebar'>{Sidebar}</Sidebar>
        <NavBar className='menus__navbar'>{NavBar}</NavBar>
    </div>    
    <div>
        <Layout className='layout'>
            <div>Dashboard user {userInfos.userInfos.firstName}</div>
            <User className='layout__user'>{User}</User>
            <ChartsActivity className='layout__charts'>{ChartsActivity}</ChartsActivity>
            <ChartsSession className='layout__charts'>{ChartsSession}</ChartsSession>
            <ChartsWeb className='layout__charts'>{ChartsWeb}</ChartsWeb>
            <ChartsScore className='layout__charts'>{ChartsScore}</ChartsScore>
            <ChartsPerf className='layout__charts'>{ChartsPerf}</ChartsPerf>
            <UserStats className='layout__userStats'>{UserStats}</UserStats>
        </Layout>
    </div>
    </>
  )
}
