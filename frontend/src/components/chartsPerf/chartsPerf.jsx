import React from 'react';
import PropTypes from 'prop-types';

import styled from './chartsPerf.module.scss';
import IconSection from './iconeSection.jsx';
import iconEnergy from '../../assets/icones/energy.svg';
import iconChicken from '../../assets/icones/chicken.svg';
import iconApple from '../../assets/icones/apple.svg';
import iconBurger from '../../assets/icones/cheeseburger.svg';

ChartsPerf.propTypes = {
  userInfos: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      proteinCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
    }),
  }).isRequired,
};

export default function ChartsPerf({ userInfos }) {
  const keyData = userInfos ? userInfos.keyData : {};

  return (
    <section className={styled.perf}>
      <IconSection
        icon={iconEnergy}
        value={`${keyData.calorieCount || 0}kCal`}
        unit="Calories"
        altText="Icone Energie"
      />
      <IconSection
        icon={iconChicken}
        value={`${keyData.proteinCount || 0}g`}
        unit="Proteines"
        altText="Icone Poulet"
      />
      <IconSection
        icon={iconApple}
        value={`${keyData.carbohydrateCount || 0}g`}
        unit="Glucides"
        altText="Icone Pomme"
      />
      <IconSection
        icon={iconBurger}
        value={`${keyData.lipidCount || 0}g`}
        unit="Lipides"
        altText="Icone Burger"
      />
    </section>
  );
}
