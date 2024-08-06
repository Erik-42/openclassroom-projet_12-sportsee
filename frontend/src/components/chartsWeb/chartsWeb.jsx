import React from 'react'
import styled from'./chartsWeb.module.scss'
import { PolarAngleAxis, PolarGrid, RadarChart ,Radar, ResponsiveContainer} from 'recharts'


export default function chartsWeb({userPerformance}) {
  
    const dico ={cardio:"Cardio",energy:"Energie", endurance:"Endurance", strength:"Force",speed:"Vitesse", intensity:"intensité" }

  const dataPerformance = userPerformance ? userPerformance.data.map((p)=>{
    return {
      kind: dico[userPerformance.kind[p.kind]],
      data: p.value
    }
  }) :[]
  
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart outerRadius={90} width={730} height={250} data={dataPerformance} className={styled.radarchart}>
        <PolarGrid className={styled.polarGrid} />
        <PolarAngleAxis dataKey="kind" className={styled.polarAngleAxis} tick={{ fill: 'white' }}/>
        <Radar name="Performance" dataKey="data"  fillOpacity={0.6} className={styled.radar} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
