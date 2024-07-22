import React from 'react';
import styled from './chartsSession.module.scss';
import { CartesianGrid, LineChart, Tooltip, XAxis, YAxis, Legend, Line } from 'recharts';
import PropTypes from 'prop-types';

export default function ChartsSession({ userSession }) {
  console.log("userSession", userSession);

  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const dataSession = userSession ? userSession.sessions.map((session, index) => {
    return {
      name: daysOfWeek[index % 7],
      day: session.day,
      sl: session.sessionLength
    };
  }) : [];

  console.log(dataSession);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, day, sl } = payload[0].payload;
      return (
        <div className={styled['custom-tooltip']}>
          <p className={styled.name}>{`Name: ${name}`}</p>
          <p className={styled.day}>{`Day: ${day}`}</p>
          <p className={styled.sl}>{`Session Length: ${sl}`}</p>
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
          name: PropTypes.string,
          day: PropTypes.number,
          sl: PropTypes.number,
        }),
        value: PropTypes.number,
      })
    ),
  };

  return (
    <LineChart
      width={730}
      height={250}
      data={dataSession}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      className={styled.linechart}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line type="monotone" dataKey="day" stroke="#8884d8" />
      <Line type="monotone" dataKey="sl" stroke="#82ca9d" />
    </LineChart>
  );
}

ChartsSession.propTypes = {
  userSession: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
};
