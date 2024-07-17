import React from 'react'
import './chartsSession.module.scss'
import { CartesianGrid, LineChart, Tooltip, XAxis, YAxis, Legend, Line } from 'recharts'


export default function chartsSession({userSession}) {

    console.log("userSession",userSession)

  let counter = 0
  const dataSession = userSession ? userSession.sessions.map((a)=>{
    counter ++
    return {
      name:counter,
      kg:a.kilogram,
      sp:0,
      kcal:a.calories
    }
  }) :[]
  
    console.log(dataSession)

  return (

<LineChart width={730} height={250} data={dataSession}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="kg" stroke="#8884d8" />
  <Line type="monotone" dataKey="kcal" stroke="#82ca9d" />
</LineChart>

)
}

