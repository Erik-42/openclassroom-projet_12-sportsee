import React from 'react'
import styled from'./chartsWeb.module.scss'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart ,Radar,Legend, ResponsiveContainer} from 'recharts'


export default function chartsWeb({userPerformance}) {
  
    console.log("userPerformance",userPerformance)

  const dataPerformance = userPerformance ? userPerformance.data.map((p)=>{
    return {
      kind: userPerformance.kind[p.kind],
      data: p.value
    }
  }) :[]
  
    console.log(dataPerformance)

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart outerRadius={90} width={730} height={250} data={dataPerformance} className={styled.radarchart}>
        <PolarGrid className={styled.polarGrid} />
        <PolarAngleAxis dataKey="kind" className={styled.polarAngleAxis} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} className={styled.polarRadiusAxis} />
        <Radar name="Performance" dataKey="data" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} className={styled.radar} />
        <Legend className={styled.legend} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
