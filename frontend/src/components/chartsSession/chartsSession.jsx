import React, { useState } from 'react';
import styled from './chartsSession.module.scss';
import { CartesianGrid, LineChart, Tooltip, XAxis, Line, ResponsiveContainer, YAxis } from 'recharts';
import PropTypes from 'prop-types';

export default function chartsSession({ userSession }) {
  const [tooltipPosition, setTooltipPosition] = useState(0);

  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const dataSession = userSession ? userSession.sessions.map((session, index) => {
    return {
      name: daysOfWeek[index % 7],
      day: session.day,
      sl: session.sessionLength
    };
  }) : [];

  const CustomTooltip = ({ active, payload,coordinate }) => {
    if (active && payload && payload.length) {
      const { sl } = payload[0].payload;
      setTooltipPosition(coordinate.x);
      return (
        <div className={styled['custom-tooltip']}>
          <p className={styled.sl}>{`${sl} min`}</p>
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
          sl: PropTypes.number,
        }),
        value: PropTypes.number,
      })
    ),
    coordinate: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  };

  return (
  <div className={styled.linechart} style={{ '--tooltip-position': `${tooltipPosition}px` }}>
     <ResponsiveContainer width="100%" height={320} >
      <LineChart
        data={dataSession}
        className={styled.linechart}
        margin={{top:25,right:20,left:20,bottom:10}}>
          <text x="50" y="50" className={styled.LineChartLabelSession}>
            Durée moyenne des</text>
          <text x="50" y="75" className={styled.LineChartLabelSession}>
            sessions</text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
        <XAxis dataKey="name" className={styled['x-axis']} />
         <YAxis
          domain={[20, 'dataMax + 25']} className={styled['y-axis']}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sl" stroke="#fff" dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
}

