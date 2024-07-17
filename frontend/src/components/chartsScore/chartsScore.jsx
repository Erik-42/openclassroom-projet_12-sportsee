import React from 'react'
import styled from'./chartsScore.module.scss'
import  {PieChart,Pie} from 'recharts'

export default function chartsScore({userInfos}) {
  
  console.log("userInfos",userInfos)

  const dataUserInfos = userInfos ? userInfos.score: null
  
  console.log(dataUserInfos)
  const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

  return (
    <>
<PieChart width={730} height={250} data={dataUserInfos} className={styled.PieChart}>
  <Pie data={dataUserInfos && dataUserInfos.score} dataKey="score" nameKey="score" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

</PieChart>
</>
)
}
