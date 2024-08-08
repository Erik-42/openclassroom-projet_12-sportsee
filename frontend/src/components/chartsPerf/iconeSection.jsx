import React from 'react';
import PropTypes from 'prop-types';
import styled from './chartsPerf.module.scss';

// IconSection.propTypes = {
//   icon: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired, 
//   unit: PropTypes.string.isRequired, 
//   altText: PropTypes.string.isRequired,
// };

const IconSection = ({ icon, value, unit, altText }) => (
  <div className={styled.perf__icone}>
    <img src={icon} alt={altText} className={styled.perf__icone__img} />
    <div className={styled.perf__icone__text}>
      <h3 className={styled.perf__icone__text__info}>{value}</h3>
      <p className={styled.perf__icone__text__unite}>{unit}</p>
    </div>
  </div>
);

export default IconSection;
