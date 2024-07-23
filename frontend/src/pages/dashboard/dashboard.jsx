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
// import { useGetData } from '../../hooks/getDataMock.jsx'

export default function Dashboard() {

const {userInfos, userActivity, userSession, userPerformance} = useGetData()

  return (
    <>
    <div className={styled.menus}>
        <NavBar className={styled.menus__navbar}></NavBar>
        <Sidebar className={styled.menus__sidebar}></Sidebar>
    </div>    
    <div className={styled.layout}>
        <User className={styled.layout__user} userInfos={userInfos}></User>
        <div className={styled.layout__charts}>
        <ChartsActivity className={styled.layout__charts__chartsActivity} userActivity={userActivity}></ChartsActivity>
          <div className={styled.layout__charts__square}>
            <ChartsSession className={styled.layout__charts__square__session} userSession={userSession}></ChartsSession>
            <ChartsWeb className={styled.layout__charts__square__web} userPerformance={userPerformance}></ChartsWeb>
            <ChartsScore className={styled.layout__charts__square__score} userInfos={userInfos}></ChartsScore>
          </div>
        <ChartsPerf className={styled.layout__charts__chartsPerf} userInfos={userInfos}></ChartsPerf>
        </div>
    </div>
    </>
  )
}
