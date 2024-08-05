import React from 'react'
import styled from'./chartsScore.module.scss'
import  {PieChart,Pie,Label, ResponsiveContainer,Cell} from 'recharts'

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

    const COLORS = ['#ff0000', '#fff']; // rouge pour le score, et blanc pour le reste

  console.log(dataUserInfos)
  
  return (
      <ResponsiveContainer width="100%" height={320}>
      <PieChart width={730} height={250} className={styled.PieChart}>
              <text x="50" y="50" className={styled.PieChartLabelScore}>
                Score
              </text>
            
        <Pie 
          data={pieData} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          innerRadius={85}  
          outerRadius={100} 
          fill="#ff0000" 
          startAngle={200} 
          endAngle={-270}  
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
           <Label
            content={
              <text x="50%" y="50%" dy={8} textAnchor="middle" className={styled.PieChartLabelCenter}>
                {`${dataUserInfos.toFixed(0)}%`}
                <tspan x="50%" dy="1.2em" className={styled.PieChartLabelObjective}>de votre objectif</tspan>
              </text>
            }
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
)
}
