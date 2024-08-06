/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from './home.module.scss';

import mainImage from '../../assets/images/img-accueil.jpg';
import logoImage from '../../assets/logo/logo.png';

export default function Home() {
  return (
    <main>
      <nav className={styled.homebar}>
        <img src={logoImage} className={styled.homebar__logo} alt="Logo" />
        <NavLink to="#" className={styled.homebar__inscrire}>S'inscrire</NavLink>
        <NavLink to="#" className={styled.homebar__connexion}>Connexion</NavLink>
      </nav>
      <div className={styled.users}>
        <Link to="/dashboard/12" className={styled.users__user}>User 12</Link>
        <Link to="/dashboard/18" className={styled.users__user}>User 18</Link>
      </div>
      <img src={mainImage} alt="Accueil SportSee" className={styled.mainImage} />

    </main>
  );
}
