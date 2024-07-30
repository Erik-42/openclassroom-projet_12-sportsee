import React from 'react'
import styled from'./chartsScore.module.scss'
import  {PieChart,Pie,Label, ResponsiveContainer} from 'recharts'

export default function chartsScore({userInfos}) {
  
  console.log("userInfos",userInfos)

  const dataUserInfos = userInfos ? userInfos.todayScore*100 : 0
  const pieData = [
    {
      name:"score",
      value:dataUserInfos,
    },
    {
      name: 'Empty',
      value: 100 - dataUserInfos,
    }
  ];

  console.log(dataUserInfos)
  
  return (
      <ResponsiveContainer width="100%" height={320}>
      <PieChart width={730} height={250} className={styled.PieChart}>
        <Label 
          value='Score' 
          position='top' 
          className={styled.PieChartLabelTop}
        />
        <Pie 
          data={pieData} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          innerRadius={85}  // Adjust innerRadius as needed
          outerRadius={100} // Increase this to enlarge the circle
          fill="#ff0000" 
          startAngle={90} 
          endAngle={-270}  // Adjust endAngle to ensure full circle display
        >
          <Label 
            value={`${dataUserInfos.toFixed(0)}% \n de votre objectif`} 
            position="center" 
            className={styled.PieChartLabelCenter}/>
            <tspan x="50%" dy="-1.2em">{`${dataUserInfos.toFixed(0)}%`}</tspan>
            <tspan x="50%" dy="1.2em">de votre objectif</tspan>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
)
}
