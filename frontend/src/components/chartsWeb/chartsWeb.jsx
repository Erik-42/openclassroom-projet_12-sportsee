import React, { useEffect, useState } from 'react'
import styled from'./chartsWeb.module.scss'
import { PolarAngleAxis, PolarGrid, RadarChart ,Radar, ResponsiveContainer} from 'recharts'

const getOuterRadius = () => {
  if (window.innerWidth <= 1400) {
    return 60; 
  }
  return 90;
};

export default function chartsWeb({userPerformance}) {
  
   const [outerRadius, setOuterRadius] = useState(getOuterRadius);

  useEffect(() => {
    const handleResize = () => setOuterRadius(getOuterRadius());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
    const dico ={cardio:"Cardio",energy:"Energie", endurance:"Endurance", strength:"Force",speed:"Vitesse", intensity:"Intensité" }

  const dataPerformance = userPerformance ? userPerformance.data.map((p)=>{
    return {
      kind: dico[userPerformance.kind[p.kind]],
      data: p.value
    }
  }) :[]
  
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart outerRadius={outerRadius} width={730} height={250} data={dataPerformance} className={styled.radarchart}>
        <PolarGrid className={styled.polarGrid} />
        <PolarAngleAxis dataKey="kind" className={styled.polarAngleAxis} tick={{ fill: 'white' }}/>
        <Radar name="Performance" dataKey="data"  fillOpacity={0.6} className={styled.radar} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
