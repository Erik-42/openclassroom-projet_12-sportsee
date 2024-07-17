import React from 'react'
import './chartsWeb.module.scss'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart ,Radar,Legend} from 'recharts'


export default function chartsWeb({userPerformance}) {
  
    console.log("userPerformance",userPerformance)

  let counter = 0
  const dataPerformance = userPerformance ? userPerformance.data.map((p)=>{
    counter ++
    return {
      name:counter,
      kg:p.kilogram,
      sp:0,
      kcal:p.calories
    }
  }) :[]
  
    console.log(dataPerformance)

  return (

<RadarChart outerRadius={90} width={730} height={250} data={dataPerformance}>
  <PolarGrid />
  <PolarAngleAxis dataKey="kind" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="data" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Legend />
</RadarChart>
  )
}
