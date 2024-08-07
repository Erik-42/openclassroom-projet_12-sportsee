import React from 'react'
import styled from './navbar.module.scss'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/logo/logo.png'

export default function navbar() {
  return (
    <nav className={styled.navbar}>
        <img src={logo} className={styled.navbar__logo} alt="Logo SportSee"/>
        <div className={styled.navbar__header}>
          <NavLink to='/' className={styled.navbar__header__text}>Accueil</NavLink>
          <NavLink to='#' className={styled.navbar__header__text}>Profil</NavLink>
          <NavLink to='#' className={styled.navbar__header__text}>Réglage</NavLink>
          <NavLink to='#' className={styled.navbar__header__text}>Communauté</NavLink>
        </div>
    </nav>
  )
}
