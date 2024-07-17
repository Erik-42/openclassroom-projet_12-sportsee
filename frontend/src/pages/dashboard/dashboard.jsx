import React, {} from 'react'
import styled from './dashboard.module.scss'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import NavBar from '../../components/navbar/navbar.jsx'
import User from '../../components/user/user.jsx'
import ChartsActivity from '../../components/chartsActivty/chartsActivity.jsx'
import ChartsSession from '../../components/chartsSession/chartsSession.jsx'
import ChartsWeb from '../../components/chartsWeb/chartsWeb.jsx'
import ChartsScore from '../../components/chartsScore/chartsScore.jsx'
import ChartsPerf from '../../components/chartsPerf/chartsPerf.jsx'
import { useGetData } from '../../hooks/getData.jsx'

export default function Dashboard() {

const {userInfos, userActivity, userSession, userPerformance} = useGetData()
// console.log(userInfos, userActivity, userSession, userPerformance)

  return (
    <>
    <div className={styled.menus}>
        <NavBar className={styled.menus__navbar}>{NavBar}</NavBar>
        <Sidebar className={styled.menus__sidebar}>{Sidebar}</Sidebar>
    </div>    
    <div className={styled.layout}>
        <User className={styled.layout__user} userInfos={userInfos}></User>
        <ChartsActivity className={styled.layout__chartsActivity} userActivity={userActivity}></ChartsActivity>
          <div className={styled.layout__charts}>
              <ChartsSession className={styled.layout__charts__session} userSession={userSession}></ChartsSession>
              <ChartsWeb className={styled.layout__charts__web} userPerformance={userPerformance}></ChartsWeb>
              <ChartsScore className={styled.layout__charts__score} userInfos={userInfos}></ChartsScore>
          </div>
        <ChartsPerf className={styled.layout__chartsPerf} userInfos={userInfos}></ChartsPerf>
    </div>
    </>
  )
}
