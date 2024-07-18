import React from 'react'
import PropTypes from 'prop-types';
import styled from'./chartsActivity.module.scss'
import  {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar, ResponsiveContainer} from 'recharts'

export default function chartsActivity({userActivity}) {
  let counter = 0
  const dataActivity = userActivity ? userActivity.sessions.map((a)=>{
    counter ++
    return {
      name:counter,
      kg:a.kilogram,
      sp:0,
      kcal:a.calories
    }
  }) :[]
  
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length && payload[0].payload) {
      return (
        <div className={styled['custom-tooltip']}>
          <p className={styled.name}>{`Name: ${payload[0].payload.name}`}</p>
          <p className={styled.kg}>{`kg: ${payload[0].value}`}</p>
          <p className={styled.name}>{`sp: ${payload[1].value}`}</p>
          <p className={styled.kcal}>{`kcal: ${payload[2].value}`}</p>
        </div>
      );
    }
    return null;
  };

  CustomTooltip.propTypes = {
   active: PropTypes.bool,
   payload: PropTypes.arrayOf(
     PropTypes.shape({
       payload: PropTypes.shape({
         name: PropTypes.number,
         kg: PropTypes.number,
         sp: PropTypes.number,
         kcal: PropTypes.number,
       }),
       value: PropTypes.number,
     })
   ),
 };

  return (
  <ResponsiveContainer width="100%" height={320}>
<BarChart data={dataActivity} className={styled.barchart}>
  <CartesianGrid strokeDasharray="3 3" vertical={false} />
  <XAxis dataKey="name" />
  <YAxis orientation='right'/>
   <Tooltip content={<CustomTooltip />} />
  <Legend verticalAlign="top" height={36} align='right'>
  <span className={styled['legend-text']}>Activité quotidienne</span>
  </Legend>
  <Bar dataKey="kg" fill="#000" barSize={7} />
  <Bar dataKey="sp" fill="transparent" barSize={7} />
  <Bar dataKey="kcal" fill="#ff0000" barSize={7} />
</BarChart>  
</ResponsiveContainer>
)
}
