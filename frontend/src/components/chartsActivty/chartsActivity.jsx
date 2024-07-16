import React from 'react'
import './chartsActivity.module.scss'
import  {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'

export default function chartsActivity({userActivity}) {
  console.log("userActivity",userActivity)
  let counter = 0
  const dataActivity = userActivity ? userActivity.sessions.map((s)=>{
    counter ++
    return {
      name:counter,
      kg:s.kilogram,
      sp:0,
      kcal:s.calories
    }
  }) :[]
  
  console.log(dataActivity)
  return (
<BarChart width={730} height={250} data={dataActivity}>
  <CartesianGrid strokeDasharray="3 3" vertical={false} />
  <XAxis dataKey="name" />
  <YAxis orientation='right'/>
  <Tooltip />
  <Legend verticalAlign="top" height={36} align='right'/>
  <Bar dataKey="kg" fill="#000" barSize={5} />
  <Bar dataKey="sp" fill="transparent" barSize={5} />
  <Bar dataKey="kcal" fill="#ff0000" barSize={5} />
</BarChart>  )
}
