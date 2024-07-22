import React from 'react'
import styled from'./chartsScore.module.scss'
import  {PieChart,Pie} from 'recharts'

export default function chartsScore({userInfos}) {
  
  console.log("userInfos",userInfos)

  const dataUserInfos = userInfos ? userInfos.todayScore.map((s)=>{
    
    return {
      score:s.todayScore*100,
    }
  }) :[]

  console.log(dataUserInfos)
  
  return (
    <>
<PieChart width={730} height={250} data={dataUserInfos} className={styled.PieChart}>
  <Pie data={dataUserInfos && dataUserInfos.todayScore} dataKey="score" nameKey="score" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
</PieChart>
</>
)
}
