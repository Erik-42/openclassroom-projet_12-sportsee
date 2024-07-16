import React from 'react'
import './navbar.module.scss'
import { NavLink } from 'react-router-dom'


export default function navbar() {
  return (
    <div className='navbar'>
        <img src='../../assets/logo/logo.png' className='navbar__logo'/>
        <div className='navbar__header'>
          <NavLink to='#' className='navbar__header__accueil'>Accueil</NavLink>
          <NavLink to='#' className='navbar__header__profil'>Profil</NavLink>
          <NavLink to='#' className='navbar__header__reglage'>Réglage</NavLink>
          <NavLink to='#' className='navbar__header__communaute'>Communauté</NavLink>
        </div>
    </div>
  )
}
