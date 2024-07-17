import React from 'react'
import styled from './navbar.module.scss'
import { NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <nav className={styled.navbar}>
        <img src='./../../assets/logo/logo.png' className={styled.navbar__logo}/>
        <div className={styled.navbar__header}>
          <NavLink to='/' className={styled.navbar__header__accueil}>Accueil</NavLink>
          <NavLink to='#' className={styled.navbar__header__profil}>Profil</NavLink>
          <NavLink to='#' className={styled.navbar__header__reglage}>Réglage</NavLink>
          <NavLink to='#' className={styled.navbar__header__communaute}>Communauté</NavLink>
        </div>
    </nav>
  )
}
