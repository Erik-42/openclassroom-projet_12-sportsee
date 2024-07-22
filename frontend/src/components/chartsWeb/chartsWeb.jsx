import React from 'react'
import styled from'./chartsWeb.module.scss'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart ,Radar,Legend} from 'recharts'


export default function chartsWeb({userPerformance}) {
  
    console.log("userPerformance",userPerformance)

  const dataPerformance = userPerformance ? userPerformance.data.map((p)=>{
    return {
      kind: userPerformance.kind[p.kind],
      data: p.data
    }
  }) :[]
  
    console.log(dataPerformance)

  return (

<RadarChart outerRadius={90} width={730} height={250} data={dataPerformance} className={styled.radarchart}>
  <PolarGrid />
  <PolarAngleAxis dataKey="kind" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Performance" dataKey="data" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Legend />
</RadarChart>
  )
}
