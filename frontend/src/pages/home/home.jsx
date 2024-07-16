import React from 'react'
import './home.module.scss'
import { Link, NavLink } from 'react-router-dom'

export default function home() {
  return (
    <>
    <nav className='homebar'>
        <div className='homebar__header'>
          <NavLink to='#' className='homebar__header__inscrire'>S`&#39`inscrire</NavLink>
          <NavLink to='#' className='homebar__header__connexion'>Connexion</NavLink>
        </div>
    </nav>

    <div className='test'>Test de configuration de SASS</div>

    <div className='users'>
        <Link to="/dashboard/12" className="users__user">User 12</Link>
        <Link to="/dashboard/18" className="users__user">User 18</Link>
    </div>
    <img src='../../assets/logo/logo.png' className='home__logo'/>
    </>
  )
}
