import React from 'react';
import styled from './chartsSession.module.scss';
import { CartesianGrid, LineChart, Tooltip, XAxis, Line, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

export default function chartsSession({ userSession }) {

  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const dataSession = userSession ? userSession.sessions.map((session, index) => {
    return {
      name: daysOfWeek[index % 7],
      day: session.day,
      sl: session.sessionLength
    };
  }) : [];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { sl } = payload[0].payload;
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
  };

  return (
     <ResponsiveContainer width="100%" height={320}>
      <LineChart
        width={258}
        height={263} 
        data={dataSession}
        className={styled.linechart}>
          <text x="50" y="50" className={styled.LineChartLabelSession}>
            Durée moyenne des</text>
          <text x="50" y="75" className={styled.LineChartLabelSession}>
            sessions</text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
        <XAxis dataKey="name" className={styled['x-axis']} />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sl" stroke="#fff" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

